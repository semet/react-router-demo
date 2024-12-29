import { type ComponentProps } from 'react'
import {
  type FieldValues,
  type Path,
  type RegisterOptions
} from 'react-hook-form'

import { type Size } from '@/types'

export type FileInputProps<T extends FieldValues> = Omit<
  ComponentProps<'input'>,
  'size'
> & {
  label?: string
  name: Path<T>
  rules?: RegisterOptions
  containerClassName?: string
  size?: Size
}
