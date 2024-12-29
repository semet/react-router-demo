import { type ComponentProps } from 'react'
import {
  type FieldValues,
  type Path,
  type RegisterOptions
} from 'react-hook-form'

import { type Size } from '@/types'

export type SelectProps<T extends FieldValues> = Omit<
  ComponentProps<'select'>,
  'size'
> & {
  label?: string
  name: Path<T>
  rules?: RegisterOptions
  containerClassName?: string
  options: {
    value: string | number
    label: string
    disabled?: boolean
  }[]
  size?: Size
}
