import type { ColumnDef } from '@tanstack/react-table'

import type { TMetaSetting } from '@/features/meta-setting'
import { MetaSettingsActions, ShowMetaContent } from '@/features/meta-setting'

export const columns: ColumnDef<TMetaSetting>[] = [
  {
    header: 'Domain',
    cell: ({ row }) => (
      <span>
        {row.original.domain ? row.original.domain.domain : 'Default'}
      </span>
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
    cell: ({ row }) => <MetaSettingsActions metaSettings={row.original} />
  }
]
