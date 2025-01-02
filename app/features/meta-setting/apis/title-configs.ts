import { titleConfigResponseSchema } from '@/features/meta-setting'
import { axiosInstance } from '@/libs'

export const getTitleConfigsRequest = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/meta-title-config/${id}`)
    return titleConfigResponseSchema.parse(data)
  } catch {
    throw new Error('Unexpected Error')
  }
}
