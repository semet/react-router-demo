import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { queryKeys } from '@/factories'
import { getTitleConfigsRequest } from '@/features/meta-setting'

type Params = {
  id: string
}

export const useGetTitleConfigs = ({ id }: Params) => {
  return useQuery({
    queryKey: queryKeys.titleConfig(id),
    queryFn: () => getTitleConfigsRequest(id),
    placeholderData: keepPreviousData
  })
}
