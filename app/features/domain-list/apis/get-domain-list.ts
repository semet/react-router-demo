import { domainListSchema, type TDomainParams } from '@/features/domain-list'
import { axiosInstance } from '@/libs'

export const getDomainListRequest = async (params: TDomainParams) => {
  try {
    const { data } = await axiosInstance.get('/domains', { params })
    return domainListSchema.parse(data)
  } catch {
    throw new Error('Unexpected Error')
  }
}
