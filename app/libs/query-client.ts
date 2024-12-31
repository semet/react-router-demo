import { QueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      retryOnMount: false,
      retry: (failureCount, error) => {
        if (error instanceof AxiosError) {
          const statusCode = error.response?.status

          if (![500, 503].includes(statusCode as number)) {
            return failureCount < 3
          }
        }

        return false
      },
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10_000)
    },
    mutations: {
      retry: false
    }
  }
})
