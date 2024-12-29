import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { type Dispatch, type FC, type SetStateAction } from 'react'
import { IoChevronDown } from 'react-icons/io5'
import { Link, useLocation } from 'react-router'
import { twMerge } from 'tailwind-merge'

import { type Menu } from '@/layouts/dashboard'

type Props = Menu & {
  activeTab: number | null
  setActiveTab: Dispatch<SetStateAction<number | null>>
}

export const DesktopSidebarSmall: FC<Props> = ({
  icon: Icon,
  activeTab,
  id,
  name,
  setActiveTab,
  subs
}) => {
  const { pathname } = useLocation()
  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <PopoverButton
            className={twMerge([
              'flex w-full items-start justify-center gap-2 text-slate-300 hover:text-white focus:outline-none',
              activeTab === id && 'text-white'
            ])}
          >
            <Icon className="text-lg" />
          </PopoverButton>
          <AnimatePresence>
            {open && (
              <PopoverPanel
                static
                as={motion.div}
                initial={{
                  scale: 0.5,
                  opacity: 0,
                  transformOrigin: 'top left'
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transformOrigin: 'top left',
                  transition: { type: 'tween', duration: 0.2 }
                }}
                exit={{ scale: 0.5, opacity: 0, transition: { duration: 0.1 } }}
                anchor="right start"
                className="bg-primary -mt-2 ml-2 flex min-w-[200px] flex-col gap-2 rounded p-4 shadow-[0px_4px_12px_rgba(0,0,0,0.1)]"
              >
                <div className="flex w-full items-center justify-between text-sm text-white">
                  <span>{name}</span>
                  <IoChevronDown />
                </div>
                <div className="flex flex-col pl-4">
                  {subs?.map((menu) => (
                    <Link
                      key={menu.id}
                      to={menu.href}
                      onClick={() => {
                        setActiveTab(menu.id)
                        close()
                      }}
                      className={twMerge([
                        'py-2 text-sm text-slate-300 hover:text-white',
                        pathname === menu.href && 'text-white'
                      ])}
                    >
                      {menu.name}
                    </Link>
                  ))}
                </div>
              </PopoverPanel>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  )
}
