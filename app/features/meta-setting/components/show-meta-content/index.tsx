import { useState, type FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FaRegCopy } from 'react-icons/fa'
import { toast } from 'react-toastify'

import { Button, Modal } from '@/components/base-ui'
import { CodeEditor } from '@/components/forms'

type Props = {
  content: string
}

export const ShowMetaContent: FC<Props> = ({ content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const formMethods = useForm({
    defaultValues: {
      content
    }
  })

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      toast.success('Content copied to clipboard')
    })
  }
  return (
    <Modal
      size="lg"
      scrollable
      isOpen={isOpen}
      setIsOpen={() => setIsOpen(!isOpen)}
      button={
        <Button
          variant="info"
          onClick={() => setIsOpen(true)}
          className="rounded-lg px-4 capitalize"
          size="sm"
        >
          Show Content
        </Button>
      }
      title="Meta Content"
    >
      <FormProvider {...formMethods}>
        <div className="group relative">
          {content.length > 0 && (
            <button
              className="absolute right-6 top-2 z-10 text-slate-300 group-hover:text-slate-700"
              onClick={handleCopy}
            >
              <FaRegCopy className="text-2xl" />
            </button>
          )}
          <CodeEditor
            name="content"
            className="h-full"
            height="70vh"
            options={{
              readOnly: true
            }}
          />
        </div>
      </FormProvider>
    </Modal>
  )
}
