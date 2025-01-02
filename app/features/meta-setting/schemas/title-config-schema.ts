import { z } from 'zod'

export const titleConfigSchema = z.object({
  items: z.array(
    z.object({
      id: z.string(),
      title: z.string().min(1, 'Title must not be empty'),
      path: z.string().min(1, 'Path must not be empty')
    })
  )
})

export const titleConfigResponseSchema = z.object({
  data: z.array(
    z.object({
      id: z.string(),
      path: z.string(),
      title: z.string()
    })
  )
})

export type TTitleConfig = z.infer<typeof titleConfigSchema>
export type TTitleConfigResponse = z.infer<typeof titleConfigResponseSchema>
export type TTitleConfigData = TTitleConfigResponse['data']
