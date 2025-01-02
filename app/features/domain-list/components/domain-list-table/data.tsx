import type { ColumnDef } from '@tanstack/react-table'

import { DomainListAction, type TDomain } from '@/features/domain-list'

export const columns: ColumnDef<TDomain>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: (info) => info.row.index + 1
  },
  {
    accessorKey: 'domain',
    header: 'Domain',
    cell: ({ getValue }) => getValue()
  },
  {
    header: 'Server Name',
    cell: (info) => (
      <div className="flex flex-col">
        <code> {info.row.original.name_server_1}</code>
        <code>{info.row.original.name_server_2}</code>
      </div>
    )
  },
  {
    accessorKey: 'created_by',
    header: 'Created By',
    cell: ({ getValue }) => getValue()
  },
  {
    accessorKey: 'created_at',
    header: 'Created By',
    cell: ({ getValue }) => getValue()
  },
  {
    accessorKey: 'redirect_to',
    header: 'Redirect',
    cell: ({ getValue }) => getValue()
  },
  {
    header: 'Action',
    cell: (info) => <DomainListAction domain={info.row.original} />
  }
]
