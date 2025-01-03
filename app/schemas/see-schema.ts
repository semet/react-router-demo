import { z } from 'zod'

export const eventSourceDataSchema = z.object({
  data: z
    .object({
      dp: z.number(),
      wd: z.number(),
      coin: z.number(),
      deposits: z.array(
        z.object({
          id: z.string(),
          player: z.object({
            username: z.string(),
            total_deposit: z.number(),
            colour_code: z.string().or(z.null()),
            note: z.string().or(z.null())
          }),
          player_account_no: z.string(),
          player_account_name: z.string(),
          player_bank: z.object({
            name: z.string(),
            code: z.string(),
            image_name: z.string()
          }),
          player_colour_code: z.string().or(z.null()),
          player_remark: z.string(),
          company_account_no: z.string(),
          company_account_name: z.string(),
          company_bank: z.object({
            id: z.string(),
            name: z.string(),
            code: z.string(),
            image_name: z.string()
          }),
          transaction_id: z.string(),
          transaction_category_id: z.number(),
          description: z.string().or(z.null()),
          agent_note: z.string().or(z.null()),
          reject_note: z.string().or(z.null()),
          player_note: z.string(),
          currency: z.object({
            name: z.string(),
            code: z.string(),
            image_name: z.string()
          }),
          amount: z.number(),
          balance: z.number(),
          fee: z.number(),
          bonus: z.number(),
          status: z.number(),
          price: z.number(),
          created_at: z.string()
        })
      ),
      withdraws: z.array(
        z.object({
          id: z.string(),
          player_id: z.string(),
          player: z.object({
            username: z.string(),
            total_deposit: z.number(),
            colour_code: z.string().or(z.null()),
            note: z.string().or(z.null())
          }),
          player_account_no: z.string(),
          player_account_name: z.string(),
          player_bank: z.object({
            id: z.string(),
            name: z.string(),
            code: z.string(),
            image_name: z.string()
          }),
          player_colour_code: z.string().or(z.null()),
          player_remark: z.string().or(z.null()),
          company_account_no: z.string().or(z.null()),
          company_account_name: z.string().or(z.null()),
          company_bank: z.string().or(z.null()),
          transaction_id: z.string(),
          transaction_category_id: z.number(),
          description: z.string().or(z.null()),
          agent_note: z.string().or(z.null()),
          reject_note: z.string().or(z.null()),
          player_note: z.string().or(z.null()),
          currency: z.object({
            name: z.string(),
            code: z.string(),
            image_name: z.string()
          }),
          amount: z.number(),
          balance: z.number(),
          status: z.number(),
          price: z.number(),
          created_at: z.string(),
          payment_gateway_id: z.string().or(z.null()),
          payment_log: z.string().or(z.null())
        })
      )
    })
    .or(z.null())
})

export const eventSourceMessageSchema = z
  .object({
    type: z.enum(['init', 'dp', 'wd', 'ping']),
    info: z.string().or(z.null()),
    dp_version: z.number(),
    wd_version: z.number()
  })
  .merge(eventSourceDataSchema)

export type TEvenSourceMessage = z.infer<typeof eventSourceMessageSchema>
export type TEventSourceData = z.infer<typeof eventSourceDataSchema>['data']
