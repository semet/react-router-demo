import type { FC } from 'react'

import { SidePanel } from '@/components/base-ui'
import { usePanel } from '@/contexts'
import { TitleConfigForm, type TMetaSetting } from '@/features/meta-setting'

export const TitleConfig: FC<TMetaSetting> = (props) => {
  const { isOpen, setIsOpen } = usePanel()
  return (
    <SidePanel
      position="right"
      size="lg"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      button={
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 pb-4 pt-2 text-start text-sm text-slate-600 transition-colors duration-300 hover:bg-primary hover:text-slate-50"
        >
          <span>Title Config</span>
        </button>
      }
      title="Title Config"
    >
      <TitleConfigForm {...props} />
    </SidePanel>
  )
}
