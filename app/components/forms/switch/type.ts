import { type SwitchProps as HeadlessSwitchProps } from '@headlessui/react'
import {
  type FieldValues,
  type Path,
  type RegisterOptions
} from 'react-hook-form'

import { type Size, type Variant } from '@/types'

export type SwitchProps<T extends FieldValues> = HeadlessSwitchProps & {
  label?: string
  name: Path<T>
  rules?: RegisterOptions
  containerClassName?: string
  variant?: Variant
  size?: Size
  required?: boolean
  type?: 'radio'
}
