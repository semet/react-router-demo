import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { Link } from 'react-router'

import { Button } from '@/components/base-ui'
import { Checkbox, Input } from '@/components/forms'
import { loginSchema, useLogin, type LoginInput } from '@/features/login'
import { hashText } from '@/utils'

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('')
  const { mutate, isPending } = useLogin({
    username
  })
  const formMethods = useForm<LoginInput>({
    defaultValues: {
      username: '',
      password: '',
      remember: true,
      hash: ''
    },
    resolver: zodResolver(loginSchema)
  })
  const { handleSubmit } = formMethods

  const onSubmit = handleSubmit((data) => {
    const { username, password } = data
    const hash = hashText({
      username,
      password,
      remember: true
    })

    const payload = {
      username,
      password,
      remember: true,
      hash
    }
    setUsername(username)
    mutate(payload)
  })
  return (
    <FormProvider {...formMethods}>
      <div className="flex flex-col gap-6">
        <h2 className="text-start text-lg font-semibold text-slate-600">
          Welcome Back
        </h2>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4"
        >
          <Input<LoginInput>
            name="username"
            label="Username"
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
          <Button
            type="submit"
            disabled={isPending}
            isLoading={isPending}
          >
            Login
          </Button>
        </form>
      </div>
    </FormProvider>
  )
}
