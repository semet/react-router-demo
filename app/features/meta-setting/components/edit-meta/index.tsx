import { type FC } from 'react'

import { SidePanel } from '@/components/base-ui'
import { usePanel } from '@/contexts'
import { EditMetaForm, type TMetaSetting } from '@/features/meta-setting'

export const EditMeta: FC<TMetaSetting> = (props) => {
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
          className="flex items-center gap-2 px-4 pb-2 pt-4 text-start text-sm text-slate-600 transition-colors duration-300 hover:bg-primary hover:text-slate-50"
        >
          <span>Edit</span>
        </button>
      }
      title="Edit Meta"
    >
      <EditMetaForm {...props} />
    </SidePanel>
  )
}
