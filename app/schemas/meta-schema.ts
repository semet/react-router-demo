import { z } from 'zod'

export const metaSchema = z.object({
  links: z.object({ first: z.string(), last: z.string() }),
  meta: z.object({
    current_page: z.number(),
    last_page: z.number(),
    per_page: z.number(),
    total: z.number(),
    tz: z.string()
  })
})

export type TRequestMeta = z.infer<typeof metaSchema>
