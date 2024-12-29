import { type EditorProps } from '@monaco-editor/react'
import {
  type FieldValues,
  type Path,
  type RegisterOptions
} from 'react-hook-form'

export type CodeEditorType<T extends FieldValues> = EditorProps & {
  label?: string
  name: Path<T>
  rules?: RegisterOptions
  containerClassName?: string
  required?: boolean
  id?: string
  defaultLanguage?: Languages
}

type Languages = 'html' | 'css' | 'javascript' | 'typescript' | 'json'
