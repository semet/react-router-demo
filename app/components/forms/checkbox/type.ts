import { type ComponentProps } from 'react'
import {
  type FieldValues,
  type Path,
  type RegisterOptions
} from 'react-hook-form'

import { type Size, type Variant } from '@/types'

export type CheckboxProps<T extends FieldValues> = Omit<
  ComponentProps<'input'>,
  'size' | 'type'
> & {
  label?: string
  name: Path<T>
  rules?: RegisterOptions
  containerClassName?: string
  variant?: Variant
  size?: Size
  required?: boolean
  type?: 'checkbox'
}
