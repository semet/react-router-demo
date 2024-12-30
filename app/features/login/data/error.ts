export const errorCode: { [key: string]: string } = {
  INVALID_USERNAME_OR_PASSWORD: 'Invalid username or password',
  INVALID_IP_ADDRESS: 'Invalid ip address',
  ACCOUNT_NOT_ACTIVE: 'Account not active',
  PIN_NOT_MATCH: 'Invalid pin',
  NOT_FOUND: 'Username not registered, please contact Admin',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR: Please contact Admin',
  UNEXPECTED_ERROR: 'UNEXPECTED_ERROR: Please contact Admin',
  BAD_REQUEST: 'BAD_REQUEST: Please contact Admin',
}

export const status = new Set([401, 409])
