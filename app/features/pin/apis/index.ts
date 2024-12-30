import { AxiosError } from 'axios'

import { errorCode } from '@/features/login'
import { pinResponseSchema, type TPinRequest } from '@/features/pin'
import { axiosInstance } from '@/libs'

export const pinRequest = async (payload: TPinRequest) => {
  try {
    const { data } = await axiosInstance.post('/pin/validate', payload)

    return pinResponseSchema.parse(data)
  } catch (error) {
    if (error && error instanceof AxiosError) {
      const { response, code, message } = error

      if (code !== 'ECONNABORTED') {
        const errorData = response?.data?.error

        throw new Error(errorCode[errorData?.code] || errorData?.message)
      }

      throw new Error(message)
    }
    throw new Error('Unexpected Error')
  }
}
