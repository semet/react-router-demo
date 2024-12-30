import { AxiosError } from 'axios'

import {
  errorCode,
  loginResponseSchema,
  type LoginInput
} from '@/features/login'
import { axiosInstance } from '@/libs'

export const loginRequest = async (payload: LoginInput) => {
  try {
    const { data } = await axiosInstance.post('/login', payload)

    return loginResponseSchema.parse(data)
  } catch (error) {
    if (error && error instanceof AxiosError) {
      const { response, message } = error

      if ([400, 401, 404].includes(response?.status as number)) {
        const code = response?.data?.error?.code
        const customMessage = response?.data?.error?.message

        throw new Error(errorCode[code], {
          cause: {
            message: customMessage,
            name: code
          }
        })
      }

      throw new Error(message)
    }
    throw new Error('unknown error')
  }
}
