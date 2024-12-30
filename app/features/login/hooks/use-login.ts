import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { decodeJwt } from 'jose'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

import {
  ID,
  ID2,
  IS_SETUP_REQUIRED,
  REFRESH_TOKEN,
  USERNAME
} from '@/configs/credentials'
import { loginRequest } from '@/features/login'
import { hashText } from '@/utils'

type Props = {
  username: string
}

export const useLogin = ({ username }: Props) => {
  const navigate = useNavigate()
  return useMutation({
    mutationKey: ['login'],
    mutationFn: loginRequest,
    onSuccess: ({ data }) => {
      const {
        setup_required: setupRequired,
        token,
        token2,
        hash,
        refresh_token
      } = data

      const confirmHash = hashText({
        setup_required: setupRequired,
        token,
        token2,
        refresh_token
      })

      if (confirmHash === hash) {
        const expToken = decodeJwt(token)?.exp
        const expTokenDate = expToken ? new Date(expToken * 1000) : undefined

        const expRefreshToken = decodeJwt(refresh_token)?.exp
        const expRefreshTokenDate = expRefreshToken
          ? new Date(expRefreshToken * 1000)
          : undefined
        const oneYearFromNow = new Date()
        oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1)

        Cookies.set(ID, token, {
          sameSite: 'strict',
          expires: expTokenDate
        })

        Cookies.set(ID2, token2, {
          sameSite: 'strict',
          expires: oneYearFromNow
        })

        Cookies.set(REFRESH_TOKEN, refresh_token, {
          sameSite: 'strict',
          expires: expRefreshTokenDate
        })

        Cookies.set(IS_SETUP_REQUIRED, setupRequired ? 'true' : 'false', {
          sameSite: 'strict',
          expires: oneYearFromNow
        })

        Cookies.set(USERNAME, username, {
          sameSite: 'strict',
          expires: expTokenDate
        })

        if (setupRequired) {
          navigate('/auth/setup-account')
          return
        }

        navigate('/auth/pin')
      }
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        const errorMessage = err.message
        toast.error(errorMessage)
      }
    }
  })
}
