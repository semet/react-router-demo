import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { Link, type MetaFunction } from 'react-router'

import { Button } from '@/components/base-ui'
import { Checkbox, Input } from '@/components/forms'

import { type LoginInput, loginSchema } from './schema'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Login',
      description: 'Login page'
    }
  ]
}

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const formMethods = useForm<LoginInput>({
    defaultValues: {
      email: '',
      password: '',
      remember: true
    },
    resolver: zodResolver(loginSchema)
  })
  const { handleSubmit } = formMethods

  const onSubmit = handleSubmit((data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  })
  return (
    <FormProvider {...formMethods}>
      <div className="flex flex-col gap-6">
        <h2 className="text-center text-lg font-semibold text-slate-600">
          Welcome Back
        </h2>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4"
        >
          <Input<LoginInput>
            name="email"
            label="Email"
            required
          />
          <Input<LoginInput>
            name="password"
            label="Password"
            required
            type={showPassword ? 'text' : 'password'}
            rightNode={
              <button
                onClick={() => setShowPassword((prev) => !prev)}
                type="button"
                className="flex items-center bg-slate-100 px-4 text-sm text-slate-600"
              >
                {showPassword ? (
                  <IoEyeOffOutline className="text-xl" />
                ) : (
                  <IoEyeOutline className="text-xl" />
                )}
              </button>
            }
          />
          <div className="flex justify-between">
            <Checkbox<LoginInput>
              name="remember"
              label="Remember me"
            />
            <Link
              to="/auth/forgot-password"
              className="text-nowrap text-sm text-slate-600 underline"
            >
              Forgot Password?
            </Link>
          </div>
          <Button type="submit">Login</Button>
        </form>
      </div>
    </FormProvider>
  )
}

export default LoginPage
