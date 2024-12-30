import { type MetaFunction } from 'react-router'

import { LoginForm } from '@/features/login'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Login',
      description: 'Login page'
    }
  ]
}

const LoginPage = () => {
  return <LoginForm />
}

export default LoginPage
