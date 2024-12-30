import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '@/components/base-ui'
import { Input } from '@/components/forms'
import {
  type TPinInput,
  generateUniqueNumbers,
  pinSchema,
  usePIN
} from '@/features/pin'
import { createObject, hashText } from '@/utils'

export function PinForm() {
  const [randomNumbers, setRandomNumbers] = useState<number[]>([])

  const formMethods = useForm<TPinInput>({
    defaultValues: {
      first: '',
      second: ''
    },
    resolver: zodResolver(pinSchema)
  })

  const { watch, setFocus, handleSubmit } = formMethods
  const { mutate, isPending } = usePIN()
  const onSubmit = handleSubmit((data) => {
    const [firstDigit, secondDigit] = randomNumbers

    const hashObject = createObject(firstDigit, secondDigit, data)
    const hash = hashText(hashObject)

    const payload = {
      input: {
        [firstDigit]: data.first,
        [secondDigit]: data.second
      },
      hash
    }
    mutate(payload)
  })

  const firstPin = watch('first')
  useEffect(() => {
    if (firstPin !== '' && firstPin !== undefined) {
      setFocus('second')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstPin])

  useEffect(() => {
    setRandomNumbers(generateUniqueNumbers)
    setFocus('first')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <FormProvider {...formMethods}>
      <div className="flex flex-col gap-6">
        <h2 className="text-start text-lg font-semibold text-slate-600">
          Enter PIN
        </h2>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-5"
        >
          <div className="flex gap-4">
            <Input<TPinInput>
              name="first"
              leftNode={
                <span className="content-center bg-slate-200 px-5 text-slate-500">
                  {randomNumbers[0]?.toString()}
                </span>
              }
            />
            <Input<TPinInput>
              name="second"
              leftNode={
                <span className="content-center bg-slate-200 px-5 text-slate-500">
                  {randomNumbers[1]?.toString()}
                </span>
              }
            />
          </div>
          <Button
            disabled={isPending}
            isLoading={isPending}
          >
            Submit
          </Button>
        </form>
      </div>
    </FormProvider>
  )
}
