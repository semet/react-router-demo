import type { TDomainParams } from '@/features/domain-list'
import type { TMetaSettingParams } from '@/features/meta-setting'

export const queryKeys = {
  domainList: (params: TDomainParams) => ['domain-list', params] as const,
  metaSetting: (params: TMetaSettingParams) =>
    ['meta-setting', params] as const,
  titleConfig: (id: string) => ['title-config', id] as const
}
