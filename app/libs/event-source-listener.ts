import { fetchEventSource } from '@microsoft/fetch-event-source'
import Cookies from 'js-cookie'

import { BANK_ACCOUNTS, BANKS } from '@/configs/sse'

const baseURL = import.meta.env.VITE_API_URL

export const eventSourceListener = async () => {
  const banks = Cookies.get(BANKS) || ''
  const bankAccounts = Cookies.get(BANK_ACCOUNTS) || ''

  const filter: Record<typeof BANKS | typeof BANK_ACCOUNTS, string> = {
    [BANKS]: banks,
    [BANK_ACCOUNTS]: bankAccounts
  }

  const response = await fetchEventSource(`${baseURL}/sse/wl`, {
    method: 'GET'
  })
}
