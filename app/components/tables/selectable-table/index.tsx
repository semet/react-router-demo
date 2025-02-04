import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable
} from '@tanstack/react-table'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { BiSortDown, BiSortUp } from 'react-icons/bi'
import { twMerge } from 'tailwind-merge'

import { RowPerPage, TableSearch, Pagination } from '@/components/tables'

import { type SelectableTableProps } from './type'

export const SelectableTable = <T,>(props: SelectableTableProps<T>) => {
  const {
    columns,
    data = [],
    state,
    showFooter = false,
    stripped = false,
    hovered = false,
    isLoading,
    pageCount,
    totalData,
    setSorting,
    setPagination,
    setRowSelection
  } = props
  const [globalFilter, setGlobalFilter] = useState<string>('')
  const table = useReactTable({
    columns,
    data,
    state: {
      pagination: state?.pagination,
      sorting: state?.sorting,
      rowSelection: state?.rowSelection,
      globalFilter
    },
    pageCount,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
    manualPagination: true,
    manualSorting: true
  })

  const hasData = data.length > 0
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <RowPerPage table={table} />
        <TableSearch table={table} />
      </div>
      <div className="max-w-screen mt-2 overflow-x-auto">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="border-b border-slate-200 text-left text-sm font-semibold text-slate-600"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className="p-2"
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          className={
                            header.column.getCanSort()
                              ? 'flex cursor-pointer select-none items-center'
                              : ''
                          }
                          onClick={header.column.getToggleSortingHandler()}
                          title={
                            header.column.getCanSort()
                              ? (() => {
                                  const nextOrder =
                                    header.column.getNextSortingOrder()
                                  if (nextOrder === 'asc')
                                    return 'Sort ascending'
                                  if (nextOrder === 'desc')
                                    return 'Sort descending'
                                  return 'Clear sort'
                                })()
                              : undefined
                          }
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {header.column.getIsSorted() === 'desc' && (
                            <BiSortUp className="ml-1" />
                          )}
                          {header.column.getIsSorted() === 'asc' && (
                            <BiSortDown className="ml-1" />
                          )}
                          {!header.column.getIsSorted() &&
                            header.column.getCanSort() && (
                              <BiSortDown className="ml-1 text-[#D1D5DB]" />
                            )}
                        </div>
                      )}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <AnimatePresence mode="wait">
            {hasData && !isLoading ? (
              <>
                <tbody>
                  {table.getRowModel().rows.map((row) => (
                    <motion.tr
                      key={row.id}
                      className={twMerge([
                        'border-b border-slate-200 text-sm text-slate-500',
                        hovered && 'hover:bg-slate-100',
                        stripped && 'odd:bg-slate-100',
                        state?.pagination ? 'last:border-b' : 'last:border-b-0'
                      ])}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="p-4"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
                {showFooter && (
                  <tfoot>
                    {table.getFooterGroups().map((footerGroup) => (
                      <tr
                        key={footerGroup.id}
                        className="border-b border-slate-200 text-left text-sm font-semibold text-slate-500"
                      >
                        {footerGroup.headers.map((header) => (
                          <th
                            key={header.id}
                            className="p-4"
                          >
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.footer,
                                  header.getContext()
                                )}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </tfoot>
                )}
              </>
            ) : (
              <>
                {isLoading ? (
                  <motion.tbody
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {table.getAllColumns().length > 1 && (
                      <>
                        {Array.from({
                          length: 7
                        }).map((_, index) => (
                          <tr
                            key={index}
                            className="animate-pulse border-b border-slate-200 text-sm text-slate-500 odd:bg-slate-100 even:bg-slate-300"
                          >
                            {table.getAllColumns().map((column) => (
                              <td
                                key={column.id}
                                className="p-6"
                              ></td>
                            ))}
                          </tr>
                        ))}
                      </>
                    )}
                  </motion.tbody>
                ) : (
                  <motion.tbody
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <tr>
                      <td
                        colSpan={table.getAllColumns().length}
                        className="pb-6 pt-2 text-center"
                      >
                        <img
                          src="/images/no-data.webp"
                          alt="Empty"
                          width={200}
                          height={200}
                          className="mx-auto"
                        />
                        <p className="mb-2 font-bold text-slate-700">
                          Showing 0 Data
                        </p>
                        <p className="text-sm font-medium text-slate-500">
                          Please use filter to see specific data
                        </p>
                      </td>
                    </tr>
                  </motion.tbody>
                )}
              </>
            )}
          </AnimatePresence>
        </table>
      </div>
      {hasData && state?.pagination && (
        <Pagination
          table={table}
          totalData={totalData}
          pageCount={pageCount}
        />
      )}
    </div>
  )
}
