import type { ColumnDef } from '@tanstack/react-table'

import type { TMetaSetting } from '@/features/meta-setting'
import { MetaSettingsActions, ShowMetaContent } from '@/features/meta-setting'

export const columns: ColumnDef<TMetaSetting>[] = [
  {
    header: 'Domain',
    accessorKey: 'domain',
    accessorFn: ({ domain }) => domain?.domain ?? 'Default',
    cell: ({ getValue }) => (
      <span>{getValue() ? (getValue() as React.ReactNode) : 'Default'}</span>
    )
  },
  {
    accessorKey: 'content',
    header: 'Content',
    enableColumnFilter: false,
    cell: ({ row }) => <ShowMetaContent content={row.original.content} />
  },
  {
    header: 'Actions',
    enableColumnFilter: false,
    cell: ({ row }) => <MetaSettingsActions {...row.original} />
  }
]
