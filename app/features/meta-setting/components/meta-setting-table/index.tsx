import { BasicTable } from '@/components/tables'
import { usePagination } from '@/contexts'
import { useGetMetaSetting } from '@/features/meta-setting'

import { columns } from './data'

export const MetaSettingTable = () => {
  const { filter, page, pagination, setPagination, limit } = usePagination()
  const { data, isFetching, isLoading } = useGetMetaSetting({
    filter,
    limit,
    page
  })

  const sortedData = data?.data?.sort((a, b) => {
    if (a.domain === null) return -1
    if (b.domain === null) return 1
    if (a.domain && b.domain)
      return a.domain.domain.localeCompare(b.domain.domain)
    return 0
  })

  return (
    <BasicTable
      columns={columns}
      data={sortedData}
      totalData={data?.meta?.total}
      pageCount={data?.meta?.last_page}
      isLoading={isFetching || isLoading}
      state={{ pagination }}
      setPagination={setPagination}
    />
  )
}
