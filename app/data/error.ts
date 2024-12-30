export type TErrorMessage = {
  status: number
  message: string
}

export const errorMessage: TErrorMessage[] = [
  { status: 400, message: '400 Bad Request' },
  { status: 401, message: '401 Unauthorized' },
  { status: 403, message: '403 Forbidden' },
  { status: 404, message: '404 Not Found' },
  { status: 405, message: '405 Method Not Allowed' },
  { status: 408, message: '408 Request Timeout' },
  { status: 409, message: '409 Conflict' },
  { status: 410, message: '410 Gone' },
  { status: 429, message: '429 Too Many Requests' },
  { status: 500, message: '500 Internal Server Error' },
  { status: 501, message: '501 Not Implemented' },
  { status: 502, message: '502 Bad Gateway' },
  { status: 503, message: '503 Service Unavailable' },
  { status: 504, message: '504 Gateway Timeout' },
  { status: 505, message: '505 HTTP Version Not Supported' },
]
