import { z } from 'zod'

export const metaUpdateSchema = z.object({
  id: z.string(),
  domain: z.string().or(z.null()),
  content: z.string(),
  html_title: z.string(),
  footer_text: z.string(),
  about_text: z.string()
})

export type TMetaUpdate = z.infer<typeof metaUpdateSchema>
