import { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'

import { Button, SidePanel } from '@/components/base-ui'

export const CreateDomain = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <SidePanel
      position="right"
      size="md"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      button={
        <Button
          size="sm"
          variant="primary"
          onClick={() => setIsOpen(true)}
          className="flex gap-2 rounded-full px-4 capitalize"
        >
          <FaPlus />
          <span>Create Domain</span>
        </Button>
      }
      title="Create Domain"
    ></SidePanel>
  )
}
