import {
  type ColumnDef,
  type PaginationState,
  type RowSelectionState,
  type SortingState
} from '@tanstack/react-table'
import { type Dispatch, type SetStateAction } from 'react'

export type SelectableTableProps<T> = {
  isLoading?: boolean
  data?: T[]
  columns: ColumnDef<T, unknown>[]
  showFooter?: boolean
  stripped?: boolean
  hovered?: boolean
  state: {
    pagination?: PaginationState
    sorting?: SortingState
    rowSelection: RowSelectionState
  }
  pageCount?: number
  totalData?: number
  setPagination?: Dispatch<SetStateAction<PaginationState>>
  setSorting: Dispatch<SetStateAction<SortingState>>
  setRowSelection: Dispatch<SetStateAction<RowSelectionState>>
}
