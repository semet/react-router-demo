import {
  type ColumnDef,
  type PaginationState,
  type SortingState
} from '@tanstack/react-table'
import { type Dispatch, type SetStateAction } from 'react'

export type InfiniteScrollTableProps<T> = {
  isLoading?: boolean
  isFetchingNextPage?: boolean
  data?: T[]
  columns: ColumnDef<T, unknown>[]
  showFooter?: boolean
  stripped?: boolean
  hovered?: boolean
  state: {
    pagination?: PaginationState
    sorting: SortingState
  }
  pageCount?: number
  totalData?: number
  setPagination?: Dispatch<SetStateAction<PaginationState>>
  setSorting: Dispatch<SetStateAction<SortingState>>
}
