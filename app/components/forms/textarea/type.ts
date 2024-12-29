import { type ComponentProps } from 'react'
import {
  type FieldValues,
  type Path,
  type RegisterOptions
} from 'react-hook-form'

export type TextareaProps<T extends FieldValues> =
  ComponentProps<'textarea'> & {
    label?: string
    name: Path<T>
    rules?: RegisterOptions
    containerClassName?: string
  }
