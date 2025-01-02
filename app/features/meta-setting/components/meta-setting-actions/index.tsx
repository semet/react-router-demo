import type { FC } from 'react'

import { ActionsContainer } from '@/components/base-ui'
import { PanelProvider } from '@/contexts'
import {
  EditMeta,
  TitleConfig,
  type TMetaSetting
} from '@/features/meta-setting'

export const MetaSettingsActions: FC<TMetaSetting> = (props) => {
  return (
    <ActionsContainer title="Options">
      <PanelProvider>
        <EditMeta {...props} />
      </PanelProvider>
      {props.domain !== null && (
        <>
          <button className="flex items-center gap-2 px-4 py-2 text-start text-sm text-slate-600 transition-colors duration-300 hover:bg-primary hover:text-slate-50">
            <span>Copy to Default</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-start text-sm text-slate-600 transition-colors duration-300 hover:bg-primary hover:text-slate-50">
            <span>Reset to Default</span>
          </button>
        </>
      )}
      <PanelProvider>
        <TitleConfig {...props} />
      </PanelProvider>
    </ActionsContainer>
  )
}
