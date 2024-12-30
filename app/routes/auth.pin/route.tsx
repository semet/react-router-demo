import type { MetaFunction } from 'react-router'

import { PinForm } from '@/features/pin'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Setup PIN',
      description: 'Setup PIN page'
    }
  ]
}

const SetupPinPage = () => {
  return <PinForm />
}

export default SetupPinPage
