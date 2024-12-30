import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import { type TDateFormatterParams, type TTimezone } from '@/types'

dayjs.extend(utc)
dayjs.extend(timezone)

export const dateFormatter = (params: TDateFormatterParams) => {
  const {
    dateTime,
    format,
    time,
    timeZone = 'Asia/Bangkok',
    isUtc = false
  } = params

  const dateOnly = dayjs(dateTime).format('YYYY-MM-DD')
  const getDateModified = (dateStr: string) =>
    isUtc ? dayjs.utc(dateStr) : dayjs.tz(dateStr, timeZone)
  const getDate = (dateStr: string) =>
    isUtc ? dayjs.utc(dateStr) : dayjs(dateStr).tz(timeZone)

  try {
    switch (time) {
      case 'start': {
        return getDateModified(dateOnly).startOf('day').format(format)
      }
      case 'end': {
        return getDateModified(dateOnly).endOf('day').format(format)
      }
      default: {
        return getDate(dateTime).format(format)
      }
    }
  } catch {
    return ''
  }
}

export const getTimeZones = (): TTimezone[] => {
  return Intl.supportedValuesOf('timeZone').map((name: string) => {
    const timeZone = dayjs().tz(name)
    const offset = timeZone.format('Z')
    return {
      value: {
        location: name,
        time: offset
      },
      label: `${offset} (${name})`
    }
  })
}

export const getCurrentTimezone = (): string => {
  return dayjs.tz.guess()
}

export const getUtcTime = () => {
  return dayjs().utc()
}
