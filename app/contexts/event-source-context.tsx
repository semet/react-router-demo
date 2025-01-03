import { fetchEventSource } from '@microsoft/fetch-event-source'
import Cookies from 'js-cookie'
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type FC,
  type PropsWithChildren,
  type SetStateAction
} from 'react'

import { ID2 } from '@/configs/credentials'
import {
  eventSourceMessageSchema,
  type TEvenSourceMessage,
  type TEventSourceData
} from '@/schemas'

type DataVersionType = {
  dp_version: number
  wd_version: number
}

type Status = 'connected' | 'disconnected' | 'loading'

type EventSourceContextType = {
  filter: string
  setFilter: Dispatch<SetStateAction<string>>
  status: Status
  setStatus: Dispatch<SetStateAction<Status>>
  dataVersion: DataVersionType
  setDataVersion: Dispatch<SetStateAction<DataVersionType>>
  eventSourceMessage: TEvenSourceMessage
  setEventSourceMessage: Dispatch<SetStateAction<TEvenSourceMessage>>
  eventSourceData: TEventSourceData
  setEventSourceData: Dispatch<SetStateAction<TEventSourceData>>
}

const EventSourceContext = createContext<EventSourceContextType | null>(null)

const baseURL = import.meta.env.VITE_API_URL

const EventSourceProvider: FC<PropsWithChildren> = ({ children }) => {
  const token = Cookies.get(ID2)
  const [filter, setFilter] = useState('')
  const [status, setStatus] = useState<Status>('loading')
  const [dataVersion, setDataVersion] = useState<DataVersionType>({
    dp_version: 0,
    wd_version: 0
  })
  const [eventSourceMessage, setEventSourceMessage] =
    useState<TEvenSourceMessage>({
      type: 'init',
      data: null,
      dp_version: 0,
      wd_version: 0,
      info: null
    })
  const [eventSourceData, setEventSourceData] =
    useState<TEventSourceData | null>(null)
  useEffect(() => {
    const controller = new AbortController()
    let retries = 0
    const maxRetries = 10
    const retryDelay = 5000

    const attemptConnection = async () => {
      try {
        setStatus('loading')
        await fetchEventSource(`${baseURL}/sse/wl?${filter}`, {
          signal: controller.signal,
          openWhenHidden: true,
          headers: {
            Authorization: `Bearer ${token}`
          },
          onopen: async () => {
            setStatus('connected')
            retries = 0
          },
          onmessage: (event) => {
            const sseData = eventSourceMessageSchema.parse(
              JSON.parse(event.data)
            )
            if (!sseData) return
            setEventSourceMessage(sseData)
            const { type, dp_version, wd_version, data: newData } = sseData
            const hasVersionData =
              dp_version !== undefined && wd_version !== undefined
            if (hasVersionData) {
              setDataVersion({
                dp_version: dp_version,
                wd_version: wd_version
              })
            }

            if (['init', 'dp', 'wd'].includes(type)) {
              setEventSourceData((prev) => {
                return !prev ? newData : { ...prev, ...newData }
              })
            }
          },
          onerror: () => {
            setStatus('disconnected')
            throw new Error('Connection error')
          },
          onclose: () => {
            setStatus('disconnected')
            throw new Error('Connection closed')
          }
        })
      } catch (error) {
        retries += 1
        if (retries <= maxRetries) {
          // eslint-disable-next-line no-console
          console.error(
            `Retrying connection (${retries}/${maxRetries})...`,
            error
          )
          setTimeout(attemptConnection, retryDelay)
        } else {
          // eslint-disable-next-line no-console
          console.error('Max retries reached. Giving up.')
        }
      }
    }

    attemptConnection()
  }, [token, filter])

  const values = {
    filter,
    setFilter,
    status,
    setStatus,
    dataVersion,
    setDataVersion,
    eventSourceMessage,
    setEventSourceMessage,
    eventSourceData,
    setEventSourceData
  }

  return (
    <EventSourceContext.Provider value={values}>
      {children}
    </EventSourceContext.Provider>
  )
}

const useEventSource = () => {
  const context = useContext(EventSourceContext)
  if (!context) {
    throw new Error('useEventSource must be used within an EventSourceProvider')
  }
  return context
}

export { EventSourceProvider, useEventSource }
