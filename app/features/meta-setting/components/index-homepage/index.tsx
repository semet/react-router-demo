import { FormProvider, useForm } from 'react-hook-form'

import { Switch } from '@/components/forms'

export const IndexHomepage = () => {
  const formMethods = useForm()
  return (
    <FormProvider {...formMethods}>
      <div>
        <Switch
          label="Index Homepage Only"
          name="indexHomepageOnly"
          variant="success"
          containerClassName="flex-row-reverse"
          // eslint-disable-next-line no-console
          onChange={(e) => console.log(e)}
        />
      </div>
    </FormProvider>
  )
}
