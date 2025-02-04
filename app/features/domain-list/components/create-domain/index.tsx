import { FaPlus } from 'react-icons/fa6'

import { Button, SidePanel } from '@/components/base-ui'
import { usePanel } from '@/contexts'
import { CreateDomainForm } from '@/features/domain-list'

export const CreateDomain = () => {
  const { isOpen, setIsOpen } = usePanel()
  return (
    <SidePanel
      position="right"
      size="lg"
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
    >
      <CreateDomainForm />
    </SidePanel>
  )
}
