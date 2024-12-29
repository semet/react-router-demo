import { type ColumnDef, type PaginationState } from '@tanstack/react-table'
import { type Dispatch, type SetStateAction } from 'react'

export type BasicTableProps<T> = {
  isLoading?: boolean
  data?: T[]
  columns: ColumnDef<T, unknown>[]
  showFooter?: boolean
  stripped?: boolean
  hovered?: boolean
  state: {
    pagination: PaginationState
  }
  pageCount?: number
  totalData?: number
  setPagination?: Dispatch<SetStateAction<PaginationState>>
}
