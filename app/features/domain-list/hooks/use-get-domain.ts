import { keepPreviousData, useQuery } from '@tanstack/react-query'

import {
  getDomainListRequest,
  type TDomainQueryParams
} from '@/features/domain-list'

export const useGetDomain = (params: TDomainQueryParams) => {
  return useQuery({
    queryKey: ['domain-list', params],
    queryFn: () => getDomainListRequest(params),
    placeholderData: keepPreviousData,
    enabled: true
  })
}
