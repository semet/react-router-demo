import type { FC } from 'react'
import { twMerge } from 'tailwind-merge'

import { Button } from '@/components/base-ui'

type Props = {
  containerClassName?: string
  onCancel?: () => void
}

export const SubmitButton: FC<Props> = ({ onCancel, containerClassName }) => {
  return (
    <div className={twMerge(['flex justify-center gap-4', containerClassName])}>
      <Button type="submit">Save</Button>
      <Button
        type="reset"
        variant="info"
        {...(onCancel && { onClick: onCancel })}
      >
        Cancel
      </Button>
    </div>
  )
}
