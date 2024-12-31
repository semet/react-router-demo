import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '@/components/base-ui'
import { AdvanceSelect, Input } from '@/components/forms'
import { usePanel } from '@/contexts'
import { createDomainSchema, type TCreateDomain } from '@/features/domain-list'

export const CreateDomainForm = () => {
  const { setIsOpen } = usePanel()
  const formMethods = useForm<TCreateDomain>({
    defaultValues: {
      affiliate_id: {
        label: '',
        value: ''
      },
      domain: ''
    },
    resolver: zodResolver(createDomainSchema)
  })

  const { handleSubmit, reset } = formMethods

  const onSubmit = handleSubmit((data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  })

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-5"
      >
        <div className="flex gap-4">
          <Input<TCreateDomain>
            label="Domain"
            name="domain"
          />
          <AdvanceSelect<TCreateDomain>
            label="Affiliate"
            name="affiliate_id"
            options={[
              { label: 'Affiliate 1', value: '1' },
              { label: 'Affiliate 2', value: '2' }
            ]}
          />
        </div>
        <div className="flex justify-center gap-4">
          <Button type="submit">Create</Button>
          <Button
            type="reset"
            variant="info"
            onClick={() => {
              reset()
              setIsOpen(false)
            }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
