import { type DropzoneProps } from 'react-dropzone-esm'
import { type FieldValues, type Path } from 'react-hook-form'

export type DargAndDropProps<T extends FieldValues> = DropzoneProps & {
  name: Path<T>
}
