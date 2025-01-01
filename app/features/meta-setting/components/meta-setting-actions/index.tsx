import type { FC } from 'react'

import { ActionsContainer } from '@/components/base-ui'
import type { TMetaSetting } from '@/features/meta-setting'

type Props = {
  metaSettings: TMetaSetting
}

export const MetaSettingsActions: FC<Props> = (_props) => {
  return (
    <ActionsContainer title="Options">
      <button className="flex items-center gap-2 px-4 pb-2 pt-4 text-start text-sm text-slate-600 transition-colors duration-300 hover:bg-primary hover:text-slate-50">
        <span>Edit</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 text-start text-sm text-slate-600 transition-colors duration-300 hover:bg-primary hover:text-slate-50">
        <span>Copy to Default</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 text-start text-sm text-slate-600 transition-colors duration-300 hover:bg-primary hover:text-slate-50">
        <span>Reset to Default</span>
      </button>
      <button className="flex items-center gap-2 px-4 pb-4 pt-2 text-start text-sm text-slate-600 transition-colors duration-300 hover:bg-primary hover:text-slate-50">
        <span>Title Config</span>
      </button>
    </ActionsContainer>
  )
}
