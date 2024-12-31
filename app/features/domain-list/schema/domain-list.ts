import { z } from 'zod'

import { metaSchema } from '@/schemas'
import type { TQueryParams } from '@/types'

export const domainListSchema = z
  .object({
    data: z.array(
      z.object({
        affiliate: z
          .object({
            affiliate_id: z.string(),
            sharing_percentage: z.number(),
            staff: z.object({
              full_name: z.string(),
              id: z.string(),
              status: z.number(),
              username: z.string()
            })
          })
          .or(z.null()),
        affiliate_id: z.string().or(z.null()),
        created_at: z.string(),
        created_by: z.string(),
        domain: z.string(),
        id: z.string(),
        js_challenge_updated_at: z.string(),
        last_applied_at: z.string(),
        name_server_1: z.string(),
        name_server_2: z.string(),
        redirect_to: z.string(),
        status_code: z.number()
      })
    )
  })
  .merge(metaSchema)

export type TDomainListResponse = z.infer<typeof domainListSchema>
export type TDomainList = TDomainListResponse['data']
export type TDomain = TDomainListResponse['data'][0]
export type TDomainQueryParams = TQueryParams<unknown>
