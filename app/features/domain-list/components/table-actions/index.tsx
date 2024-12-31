import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import type { FC } from 'react'
import { MdOutlineSettings } from 'react-icons/md'

import { type TDomain } from '@/features/domain-list'

type Props = {
  domain: TDomain
}

export const TableAction: FC<Props> = () => {
  return (
    <Popover className="relative">
      <PopoverButton className="focus-within:outline-none">
        <MdOutlineSettings />
      </PopoverButton>
      <PopoverPanel
        anchor="left start"
        className="flex flex-col rounded-md border border-gray-200 bg-white shadow-lg"
      >
        <button className="flex items-center gap-2 px-4 pb-2 pt-4 text-start text-sm text-slate-600 transition-colors duration-300 hover:bg-slate-600 hover:text-slate-50">
          <span>Clear Cache</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-start text-sm text-slate-600 transition-colors duration-300 hover:bg-slate-600 hover:text-slate-50">
          <span>Edit Redirect</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-start text-sm text-slate-600 transition-colors duration-300 hover:bg-slate-600 hover:text-slate-50">
          <span>Delete Redirect</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-start text-sm text-slate-600 transition-colors duration-300 hover:bg-slate-600 hover:text-slate-50">
          <span>Edit Affiliator</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-start text-sm text-slate-600 transition-colors duration-300 hover:bg-slate-600 hover:text-slate-50">
          <span>Delete Affiliator</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-start text-sm text-slate-600 transition-colors duration-300 hover:bg-slate-600 hover:text-slate-50">
          <span>Edit Domain</span>
        </button>
        <button className="flex items-center gap-2 px-4 pb-4 pt-2 text-start text-sm text-slate-600 transition-colors duration-300 hover:bg-slate-600 hover:text-slate-50">
          <span>Delete Domain</span>
        </button>
      </PopoverPanel>
    </Popover>
  )
}
