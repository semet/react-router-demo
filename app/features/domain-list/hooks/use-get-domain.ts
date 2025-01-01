import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { queryKeys } from '@/factories'
import {
  getDomainListRequest,
  type TDomainParams
} from '@/features/domain-list'

export const useGetDomain = (params: TDomainParams) => {
  return useQuery({
    queryKey: queryKeys.domainList(params),
    queryFn: () => getDomainListRequest(params),
    placeholderData: keepPreviousData,
    enabled: true
  })
}
