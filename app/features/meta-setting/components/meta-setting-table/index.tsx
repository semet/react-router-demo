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

  return (
    <BasicTable
      columns={columns}
      data={data?.data}
      totalData={data?.meta?.total}
      pageCount={data?.meta?.last_page}
      isLoading={isFetching || isLoading}
      state={{ pagination }}
      setPagination={setPagination}
      showGlobalSearch={false}
    />
  )
}
