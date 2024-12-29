import { type EditorContentProps } from '@tiptap/react'
import { type DetailedHTMLProps, type ReactNode } from 'react'
import {
  type FieldValues,
  type Path,
  type RegisterOptions
} from 'react-hook-form'

export type EditorProps<T extends FieldValues> = Omit<
  EditorContentProps,
  'ref' | 'editor'
> & {
  label?: string
  name: Path<T>
  rules?: RegisterOptions
  containerClassName?: string
  required?: boolean
}

export type EditorButtonProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  icon?: ReactNode
  active?: boolean
}
