import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { type Props } from './type'

export const ToolbarContainer = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { children, className, ...rest } = props
    return (
      <div
        ref={ref}
        className={twMerge([
          'flex flex-col gap-4 rounded bg-white p-4 shadow-sm md:flex-row md:items-end md:justify-end',
          className
        ])}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

ToolbarContainer.displayName = 'ToolbarContainer'
