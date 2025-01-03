import { PiCurrencyCircleDollar } from 'react-icons/pi'

import { useEventSource } from '@/contexts'
import { currencyFormatter } from '@/utils'

export const Coins = () => {
  const { eventSourceData, status } = useEventSource()
  const coin = currencyFormatter(eventSourceData?.coin ?? 0, {
    maximumFractionDigits: 2
  })
  return (
    <div className="hidden cursor-pointer items-center gap-2 rounded bg-slate-100 px-4 py-1.5 hover:bg-slate-200 sm:flex">
      <PiCurrencyCircleDollar className="text-2xl text-warning" />
      {status === 'loading' ? (
        <span className="h-6 w-16 animate-pulse rounded bg-slate-300" />
      ) : (
        <span className="font-semibold text-slate-500">{coin}</span>
      )}
    </div>
  )
}
