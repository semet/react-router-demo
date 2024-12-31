import {
  type PaginationState,
  type RowSelectionState,
  type SortingState
} from '@tanstack/react-table'
import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useState
} from 'react'
import { useLocation } from 'react-router'

type PaginationContextType<T = Record<string, unknown>> = {
  limit: number
  filter: T | undefined
  setFilter: Dispatch<SetStateAction<T | undefined>>
  pagination: PaginationState
  setPagination: Dispatch<SetStateAction<PaginationState>>
  resetPagination: () => void
  page: number
  sorting: SortingState
  setSorting: Dispatch<SetStateAction<SortingState>>
  rowSelection: RowSelectionState
  setRowSelection: Dispatch<SetStateAction<RowSelectionState>>
}

type PaginationProviderProps<T> = PropsWithChildren<{
  initialFilter?: T
  pageSize?: number
}>

const PaginationContext = createContext<PaginationContextType | undefined>(
  undefined
)

const PaginationProvider = <T,>({
  children,
  initialFilter,
  pageSize = 10
}: PaginationProviderProps<T>) => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const limit = searchParams.get('limit')
    ? Number(searchParams.get('limit'))
    : pageSize
  const [filter, setFilter] = useState<Record<string, unknown> | undefined>(
    () => initialFilter || undefined
  )

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: limit ?? pageSize
  })
  const [sorting, setSorting] = useState<SortingState>([])
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const resetPagination = () => setPagination({ ...pagination, pageIndex: 0 })
  const page = pagination.pageIndex + 1

  const value = {
    limit,
    filter,
    setFilter,
    pagination,
    page,
    setPagination,
    resetPagination,
    sorting,
    setSorting,
    rowSelection,
    setRowSelection
  }
  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  )
}

const usePagination = <T,>() => {
  const context = useContext(
    PaginationContext as React.Context<PaginationContextType<T> | undefined>
  )
  if (context === undefined) {
    throw new Error('usePagination must be used within a PaginationProvider')
  }
  return context
}

export { PaginationProvider, PaginationContext, usePagination }
