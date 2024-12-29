import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useResizeObserver } from 'usehooks-ts'

import { useLayout } from '@/contexts'

export const Logo = () => {
  const { desktopSidebarExpanded } = useLayout()
  const ref = useRef<HTMLDivElement>(null)
  const { width } = useResizeObserver({
    // @ts-expect-error this is safe
    ref
  })

  return (
    <div
      ref={ref}
      className="bg-primary-50 hidden h-[70px] items-center justify-center shadow md:flex"
    >
      {!width ? (
        <div className="h-[17px] w-[17px] animate-pulse rounded-full bg-slate-300 lg:w-[100px] lg:rounded-md"></div>
      ) : (
        <>
          {desktopSidebarExpanded ? (
            <motion.img
              key="logo-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: 'spring', bounce: 0 }}
              src="/images/logo-lg.png"
              alt="Logo"
              className="h-10 w-28 object-contain"
            />
          ) : (
            <motion.img
              key="logo-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: 'spring', bounce: 0 }}
              src="/images/logo-sm.png"
              alt="Logo"
              className="h-6 w-6 object-contain"
            />
          )}
        </>
      )}
    </div>
  )
}
