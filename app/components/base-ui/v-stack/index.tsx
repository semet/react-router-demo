import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { type Props } from './type'

export const VStack = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, ...rest } = props
  return (
    <div
      ref={ref}
      className={twMerge(['flex flex-col gap-4', className])}
      {...rest}
    >
      {children}
    </div>
  )
})

VStack.displayName = 'VStack'
