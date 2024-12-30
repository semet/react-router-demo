import axios, { AxiosError } from 'axios'
import dayjs from 'dayjs'
import { decodeJwt } from 'jose'
import Cookie from 'js-cookie'
import { toast } from 'react-toastify'

import { AXIOS_TIMEOUT } from '@/configs/constants'
import {
  GUEST,
  ID,
  IS_VERIFIED,
  REFRESH_TOKEN,
  USERNAME
} from '@/configs/credentials'
import { errorMessage, type TErrorMessage } from '@/data'
import { clearCookies, dateFormatter } from '@/utils'

const baseURL = process.env.API_URL

export const axiosInstance = axios.create({
  baseURL,
  timeout: AXIOS_TIMEOUT,
  timeoutErrorMessage: 'Request timeout'
})

axiosInstance.interceptors.request.use(
  (config) => {
    const bearerToken = Cookie.get(ID)
    config.headers.Authorization = `Bearer ${bearerToken}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

let refreshTokenPromise: Promise<string> | null = null

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    const refreshToken = Cookie.get(REFRESH_TOKEN)
    const currentUrl = window.location.href
    const bearerToken = Cookie.get(ID)
    const userName = bearerToken
      ? (decodeJwt(bearerToken)?.username as string)
      : GUEST

    const date = dateFormatter({
      dateTime: new Date().toString(),
      format: 'YYYY-MM-DDTHH:mm:ssZ'
    })
    const fullUrl = `${baseURL}${
      originalRequest?.url.startsWith('/') ? '' : '/'
    }${originalRequest?.url}`

    if (error?.code === 'ECONNABORTED') {
      throw new AxiosError(error?.message)
    }

    if (error.response?.status) {
      const errMsg = errorMessage.find(
        (e: TErrorMessage) => e.status === error.response?.status
      )?.message

      if (errMsg) {
        toast.error(`${errMsg}. ${error.response?.data?.error?.message}`, {
          toastId: `axios-${error.response.status}`,
          position: 'top-right',
          className: 'text-xs',
          bodyStyle: {
            margin: 0,
            padding: 0
          },
          style: {
            minHeight: 'unset'
          }
        })
      }
    }

    if (
      error.response?.status === 401 &&
      error.response?.data?.error?.code === 'EXPIRED_TOKEN' &&
      refreshToken &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true

      if (!refreshTokenPromise) {
        // Perform the token refresh request
        refreshTokenPromise = await axiosInstance
          .post('/refresh-token', {
            refresh_token: refreshToken
          })
          .then((response) => {
            const jwtToken = decodeJwt(response.data.data.token)
            const expToken = jwtToken?.exp
            const expTokenDate = expToken
              ? new Date(expToken * 1000)
              : undefined
            const usernameToken = jwtToken?.username as string

            const expRefreshToken = decodeJwt(
              response.data.data.refresh_token
            )?.exp
            const expRefreshTokenDate = expRefreshToken
              ? new Date(expRefreshToken * 1000)
              : undefined

            Cookie.set(ID, response.data.data.token, {
              sameSite: 'strict',
              expires: expTokenDate
            })
            Cookie.set(USERNAME, usernameToken, {
              sameSite: 'strict',
              expires: expTokenDate
            })
            //NOTE:: Look at this in case of is_verified issue
            Cookie.set(IS_VERIFIED, 'true', {
              sameSite: 'strict',
              expires: expTokenDate
            })
            Cookie.set(REFRESH_TOKEN, response.data.data.refresh_token, {
              sameSite: 'strict',
              expires: expRefreshTokenDate
            })

            axiosInstance.defaults.headers.common['Authorization'] =
              `Bearer ${response.data.data.token}`

            refreshTokenPromise = null // Reset the promise after it resolves
            return response.data.data.token
          })
          .catch((error) => {
            // Handle token refresh error (e.g., redirect to login)
            // eslint-disable-next-line no-console
            console.error('Failed to refresh token:', error)

            const clearData = {
              tag: 'TOKEN'
            }

            clearCookies(clearData)

            location.href = '/auth/login'

            refreshTokenPromise = null
            throw error
          })
      }

      return refreshTokenPromise?.then((newToken: string) => {
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`
        return axiosInstance(originalRequest)
      })
    } else if (
      error.response?.status === 401 &&
      error.response?.data?.error?.code === 'UNAUTHORIZED'
    ) {
      const iat: string =
        (bearerToken &&
          dayjs.unix(decodeJwt(bearerToken)?.iat ?? 0)?.toISOString()) ||
        ''
      const tokenCreatedAt = iat
        ? dateFormatter({
            dateTime: iat,
            format: 'YYYY-MM-DDTHH:mm:ssZ'
          })
        : ''

      const clearData = {
        tag: 'UNAUTHORIZED',
        pageUrl: currentUrl,
        apiUrl: fullUrl,
        user: userName,
        logoutAt: date,
        tokenCreatedAt: tokenCreatedAt,
        token: bearerToken as string
      }

      clearCookies(clearData)
      location.href = '/auth/login'
    } else if (
      error.response?.status &&
      ![400, 401, 404, 409, 412, 422, 429].includes(error.response.status)
    ) {
      // Define the variables for error logging
      const errorData = error.response ? error.response.data : {} // or any other relevant error info
      const errorTag =
        typeof errorData === 'object' ? errorData.error?.code : 'UNAVAILABLE'

      const { password, current_password, new_password, ...restPayload } =
        JSON.parse(originalRequest?.data ?? '{}')

      let newPayload = {
        ...restPayload
      }

      if (password) {
        newPayload = {
          ...newPayload,
          password: '*'.repeat(password.length ?? 1),
          current_password: '*'.repeat(current_password.length ?? 1),
          new_password: '*'.repeat(new_password.length ?? 1)
        }
      }

      const errorInfo =
        typeof errorData === 'object'
          ? `<pre language="json">${JSON.stringify(errorData, null, 2)}</pre>`
          : errorData

      const errorSummary = `${error.toString()} on ${originalRequest?.method?.toUpperCase()} ${fullUrl}${
        bearerToken
          ? `

🪪 <b>Token</b>: <pre>${bearerToken}</pre>`
          : ''
      }${
        originalRequest?.params
          ? `

⛓️ <b>Query</b>: <pre language="json">${JSON.stringify(
              originalRequest.params,
              null,
              2
            )}</pre>`
          : ''
      }${
        originalRequest?.data
          ? `

📜 <b>Payload</b>: <pre language="json">${JSON.stringify(
              newPayload,
              null,
              2
            )}</pre>`
          : ''
      }`

      // Error logging post request
      axios.post(
        '/api/error-log',
        {
          error: errorSummary,
          errorInfo: errorInfo, // send stringified error info
          url: currentUrl,
          user: userName,
          tag: errorTag,
          date: date
        },
        {
          timeout: AXIOS_TIMEOUT
        }
      )
    }

    return Promise.reject(error)
  }
)
