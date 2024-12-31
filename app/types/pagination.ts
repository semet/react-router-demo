import type { SortingState } from '@tanstack/react-table'

import type { TSignal } from './cancel'

export type TQueryParams<T> = {
  enabled?: boolean
  filter?: T
  limit?: number
  page?: number
  sorting?: SortingState
} & TSignal
