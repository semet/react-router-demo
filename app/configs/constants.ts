export const AXIOS_TIMEOUT = Number(import.meta.env.VITE_AXIOS_TIMEOUT) || 5000

export const AXIOS_TIMEOUT_REPORT = 60_000

export const AXIOS_TIMEOUT_EXTENDED = 300_000

export const SSE_TIMEOUT = Number(import.meta.env.VITE_SSE_TIMEOUT) || 5000

export const SSE_HEARTBEAT_TIMEOUT =
  Number(import.meta.env.VITE_SSE_HEARTBEAT_TIMEOUT) || 120_000
