import { z } from 'zod'

export const createDomainSchema = z.object({
  domain: z.string().min(1, 'Domain is required').url('Invalid domain'),
  affiliate_id: z.object({
    label: z.string(),
    value: z.string()
  })
})

export type TCreateDomain = z.infer<typeof createDomainSchema>
