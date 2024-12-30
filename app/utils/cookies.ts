import axios from 'axios'
import Cookies from 'js-cookie'

import { AXIOS_TIMEOUT } from '@/configs/constants'
import {
  ID,
  ID2,
  IS_SETUP_REQUIRED,
  IS_VERIFIED,
  REFRESH_TOKEN,
  USERNAME
} from '@/configs/credentials'

type TProps = {
  tag: string
  pageUrl?: string
  apiUrl?: string
  user?: string
  logoutAt?: string
  tokenCreatedAt?: string
  token?: string
}

export const clearCookies = (props: TProps) => {
  const { tag, pageUrl, apiUrl, user, logoutAt, tokenCreatedAt, token } = props

  if (!['CLICK', 'TOKEN', 'IDLE'].includes(tag)) {
    // Error logging post request
    axios.post(
      '/api/unauthorized-log',
      {
        pageUrl: pageUrl,
        apiUrl: apiUrl,
        user: user,
        tag: tag,
        logoutAt: logoutAt,
        tokenCreatedAt: tokenCreatedAt,
        token: token
      },
      {
        timeout: AXIOS_TIMEOUT
      }
    )
  }
  Cookies.remove(ID)
  Cookies.remove(ID2)
  Cookies.remove(REFRESH_TOKEN)
  Cookies.remove(USERNAME)
  Cookies.remove(IS_SETUP_REQUIRED)
  Cookies.remove(IS_VERIFIED)

  localStorage.clear()
}
