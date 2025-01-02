import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { queryKeys } from '@/factories'
import type { TMetaSettingParams } from '@/features/meta-setting'
import { getMetaSettingsRequest } from '@/features/meta-setting'

export const useGetMetaSetting = (params: TMetaSettingParams) => {
  return useQuery({
    queryKey: queryKeys.metaSetting(params),
    queryFn: () => getMetaSettingsRequest(params),
    placeholderData: keepPreviousData
  })
}
