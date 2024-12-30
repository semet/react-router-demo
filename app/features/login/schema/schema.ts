import { z } from 'zod'

export const loginSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  remember: z.boolean(),
  hash: z.string()
})

export const loginResponseSchema = z.object({
  data: z.object({
    hash: z.string(),
    refresh_token: z.string(),
    role: z.string(),
    setup_required: z.boolean(),
    token: z.string(),
    token2: z.string()
  })
})

export type LoginInput = z.infer<typeof loginSchema>
export type LoginResponse = z.infer<typeof loginResponseSchema>
