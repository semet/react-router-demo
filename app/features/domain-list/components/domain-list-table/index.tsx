import { BasicTable } from '@/components/tables'
import { usePagination } from '@/contexts'
import { useGetDomain } from '@/features/domain-list/'

import { columns } from './data'

export const DomainListTable = () => {
  const { filter, page, pagination, setPagination, limit } = usePagination()
  const { data, isFetching, isLoading } = useGetDomain({
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
      setPagination={setPagination}
      state={{
        pagination
      }}
      hovered
    />
  )
}
