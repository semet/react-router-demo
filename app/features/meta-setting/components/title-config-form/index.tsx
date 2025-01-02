import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import type { FC } from 'react'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { FaPlus, FaTrash } from 'react-icons/fa6'

import { SubmitButton } from '@/components/base-ui'
import { Input } from '@/components/forms'
import { usePanel } from '@/contexts'
import {
  titleConfigSchema,
  useGetTitleConfigs,
  type TMetaSetting,
  type TTitleConfig
} from '@/features/meta-setting'

export const TitleConfigForm: FC<TMetaSetting> = (props) => {
  const { setIsOpen } = usePanel()
  const { data } = useGetTitleConfigs({
    id: props.id
  })

  const formMethods = useForm<TTitleConfig>({
    values: {
      items: data?.data ?? []
    },
    resolver: zodResolver(titleConfigSchema)
  })

  const { control, handleSubmit, reset } = formMethods

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items'
  })

  const addField = () => {
    append({ id: props.id, title: '', path: '' })
  }

  const onSubmit = handleSubmit((data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  })
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-2">
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="w-min self-end rounded-full bg-success p-2 text-white"
            onClick={addField}
          >
            <FaPlus />
          </motion.button>
          {fields.map((_field, index) => (
            <div
              key={`items-${index}-path`}
              className="flex items-end gap-4"
            >
              <Input
                label="Path"
                name={`items.${index}.path` as const}
              />
              <Input
                label="Title"
                name={`items.${index}.title` as const}
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="mt-5 self-center text-danger-50"
              >
                <FaTrash />
              </button>
            </div>
          ))}
          <SubmitButton
            containerClassName="mt-4"
            onCancel={() => {
              reset()
              setIsOpen(false)
            }}
          />
        </div>
      </form>
    </FormProvider>
  )
}
