import { FormProvider, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router'

import { Select } from '@/components/forms'
import { type PageSizeFilter, type PageSizeProps } from '@/types'

export const RowPerPage = <T,>({ table }: PageSizeProps<T>) => {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  const formMethods = useForm({
    defaultValues: {
      pageSize: table.getState().pagination.pageSize
    }
  })

  return (
    <FormProvider {...formMethods}>
      <form className="flex items-center gap-2">
        <span className="hidden text-sm text-slate-500 sm:inline">showing</span>
        <Select<PageSizeFilter>
          name="pageSize"
          size="sm"
          options={[
            { label: '10', value: 10 },
            { label: '25', value: 25 },
            { label: '50', value: 50 },
            { label: '100', value: 100 }
          ]}
          onChange={(e) => {
            searchParams.set('page', '1')
            searchParams.set('limit', e.target.value)
            table.setPagination({
              pageIndex: 0,
              pageSize: Number(e.target.value)
            })
            navigate({
              search: searchParams.toString()
            })
          }}
        />
        <span className="hidden text-sm text-slate-500 sm:inline">entries</span>
      </form>
    </FormProvider>
  )
}
