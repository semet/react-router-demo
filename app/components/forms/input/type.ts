import { type ComponentProps, type ReactNode } from 'react'
import {
  type FieldValues,
  type Path,
  type RegisterOptions
} from 'react-hook-form'

import { type Size } from '@/types'

export type InputProps<T extends FieldValues> = Omit<
  ComponentProps<'input'>,
  'size' | 'name'
> & {
  label?: string
  name: Path<T>
  rules?: RegisterOptions
  containerClassName?: string
  leftNode?: ReactNode
  rightNode?: ReactNode
  size?: Size
}
