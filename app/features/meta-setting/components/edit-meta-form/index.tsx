import { zodResolver } from '@hookform/resolvers/zod'
import type { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { SubmitButton } from '@/components/base-ui'
import { CodeEditor, Input, TextEditor } from '@/components/forms'
import { usePanel } from '@/contexts'
import {
  metaUpdateSchema,
  type TMetaSetting,
  type TMetaUpdate
} from '@/features/meta-setting'

export const EditMetaForm: FC<TMetaSetting> = (props) => {
  const { setIsOpen } = usePanel()
  const { id, about_text, content, footer_text, html_title, domain } = props
  const formMethods = useForm<TMetaUpdate>({
    defaultValues: {
      id: id,
      domain: domain?.domain ?? 'Default',
      about_text: about_text ?? '',
      content: content ?? '',
      footer_text: footer_text ?? '',
      html_title: html_title ?? ''
    },
    resolver: zodResolver(metaUpdateSchema)
  })

  const { handleSubmit, reset } = formMethods

  const onSubmit = handleSubmit((data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  })

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
          <Input<TMetaUpdate>
            name="domain"
            label="Domain"
            required
            disabled
          />
          <Input<TMetaUpdate>
            name="html_title"
            label="HTML Title"
            required
          />
          <CodeEditor<TMetaUpdate>
            name="content"
            label="Content"
            required
          />
          <TextEditor<TMetaUpdate>
            name="about_text"
            label="About Text"
          />
          <TextEditor<TMetaUpdate>
            name="footer_text"
            label="Footer Text"
          />
          <SubmitButton
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
