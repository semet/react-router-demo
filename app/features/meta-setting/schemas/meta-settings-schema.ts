import { z } from 'zod'

import { responseMetaSchema } from '@/schemas'
import type { TQueryParams } from '@/types'

export const metaSettingSchema = z
  .object({
    data: z.array(
      z.object({
        merchant_id: z.number(),
        id: z.string(),
        domain_id: z.string().or(z.null()),
        content: z.string(),
        created_at: z.string(),
        created_by: z.string(),
        updated_at: z.string(),
        updated_by: z.string().or(z.null()),
        deleted_at: z.string().or(z.null()),
        deleted_by: z.string().or(z.null()),
        html_title: z.string().or(z.null()),
        about_text: z.string().or(z.null()),
        footer_text: z.string().or(z.null()),
        domain: z
          .object({
            merchant_id: z.number(),
            id: z.string(),
            domain: z.string(),
            redirect_to: z.string().or(z.null()),
            status_code: z.number(),
            created_at: z.string(),
            created_by: z.string(),
            updated_at: z.string(),
            updated_by: z.string().or(z.null()),
            deleted_at: z.string().or(z.null()),
            deleted_by: z.string().or(z.null()),
            rule_sets_id: z.string().or(z.null()),
            zone_id: z.string(),
            name_server_1: z.string(),
            name_server_2: z.string(),
            last_applied_at: z.string().or(z.null()),
            js_challenge: z.boolean(),
            js_challenge_updated_at: z.string().or(z.null()),
            key: z.string(),
            affiliate_id: z.string().or(z.null()),
            cloudflare_key: z.string().or(z.null()),
            staff_affiliate: z.string().or(z.null())
          })
          .or(z.null())
      })
    )
  })
  .merge(responseMetaSchema)

export type TMetaSettingResponse = z.infer<typeof metaSettingSchema>
export type TMetaSetting = TMetaSettingResponse['data'][number]
export type TMetaSettingParams = TQueryParams<unknown>
