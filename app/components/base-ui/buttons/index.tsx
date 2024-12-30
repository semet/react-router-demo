import { type HTMLMotionProps, motion } from 'framer-motion'
import { forwardRef, type PropsWithChildren } from 'react'
import { type IconType } from 'react-icons'
import { CgSpinner } from 'react-icons/cg'
import { twMerge } from 'tailwind-merge'

import { type Size, type Variant } from '@/types'

type Props = PropsWithChildren<{
  variant?: Variant
  size?: Size
  icon?: IconType
  isLoading?: boolean
}> &
  HTMLMotionProps<'button'>
export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    children,
    className,
    variant = 'primary',
    size = 'md',
    icon: Icon,
    isLoading,
    ...rest
  } = props

  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.95 }}
      ref={ref}
      className={twMerge([
        'flex h-fit items-center justify-center rounded px-4 py-1.5 text-white disabled:cursor-not-allowed disabled:opacity-80',
        variant === 'primary' && 'bg-primary hover:bg-primary-100',
        variant === 'success' && 'bg-success hover:bg-success-100',
        variant === 'error' && 'bg-danger hover:bg-danger-100',
        variant === 'warning' && 'bg-warning hover:bg-warning-100',
        variant === 'info' && 'bg-info hover:bg-info-100',
        size === 'sm' && 'h-sm px-3 py-1 text-xs',
        size === 'md' && 'h-md px-4 py-2 text-base',
        size === 'lg' && 'h-lg px-6 py-2.5 text-lg',
        className
      ])}
      {...rest}
    >
      {Icon && <Icon className="mr-2 text-lg" />}
      {children}
      {isLoading && (
        <CgSpinner
          className="ml-2 animate-spin"
          size={20}
        />
      )}
    </motion.button>
  )
})

Button.displayName = 'Button'
