import { z } from 'zod'

export const pinSchema = z.object({
  first: z.string().min(1, 'First PIN is required').max(1),
  second: z.string().min(1, 'Second PIN is required').max(1)
})

export const pinResponseSchema = z.object({
  data: z.object({
    hash: z.string(),
    menus: z.array(z.string()),
    success: z.boolean()
  })
})

export type TPinInput = z.infer<typeof pinSchema>
export type TPinRequest = {
  input: {
    [key: string]: string
  }
  hash: string
}
export type TPinResponse = z.infer<typeof pinResponseSchema>
