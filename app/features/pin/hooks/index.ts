import { useMutation } from '@tanstack/react-query'
import { decodeJwt } from 'jose'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router'

import { ID, IS_VERIFIED } from '@/configs/credentials'
import { MENUS } from '@/configs/storage'
import { pinRequest } from '@/features/pin'
import { hashText } from '@/utils'

export const usePIN = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationKey: ['pin-mutation'],
    mutationFn: pinRequest,
    onSuccess: ({ data }) => {
      const { success, hash, menus } = data
      const confirmHash = hashText({
        success
      })

      if (confirmHash === hash) {
        const token = Cookies.get(ID)
        const expToken = token ? decodeJwt(token)?.exp : undefined
        const expTokenDate = expToken ? new Date(expToken * 1000) : undefined

        Cookies.set(IS_VERIFIED, 'true', {
          sameSite: 'Strict',
          expires: expTokenDate
        })

        localStorage.setItem(MENUS, JSON.stringify(menus ?? ''))

        navigate('/dashboard')
      }
    }
  })
}
