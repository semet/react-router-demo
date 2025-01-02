import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { motion } from 'framer-motion'
import type { FC, PropsWithChildren } from 'react'
import { MdOutlineSettings } from 'react-icons/md'
import { twMerge } from 'tailwind-merge'

type Props = PropsWithChildren<{
  title?: string
}>

export const ActionsContainer: FC<Props> = ({ children, title }) => {
  return (
    <Popover className="relative">
      <PopoverButton
        as={motion.button}
        className={twMerge([
          'flex items-center justify-center gap-2 rounded-lg bg-slate-200 text-slate-600 focus-within:bg-slate-400 focus-within:text-white focus-within:outline-none hover:bg-success hover:text-white',
          title ? 'px-4 py-2' : 'p-2'
        ])}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.95 }}
      >
        <MdOutlineSettings />
        {title && <span>{title}</span>}
      </PopoverButton>
      <PopoverPanel
        anchor="left start"
        className="flex flex-col rounded-md border border-gray-200 bg-white shadow-lg"
      >
        {children}
      </PopoverPanel>
    </Popover>
  )
}
