import {
  metaSettingSchema,
  type TMetaSettingParams
} from '@/features/meta-setting'
import { axiosInstance } from '@/libs'

export const getMetaSettingsRequest = async (params: TMetaSettingParams) => {
  try {
    const { data } = await axiosInstance.get('/metas', { params })
    return metaSettingSchema.parse(data)
  } catch {
    throw new Error('Unexpected Error')
  }
}
