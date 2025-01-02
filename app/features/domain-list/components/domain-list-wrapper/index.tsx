import { Card, ToolbarContainer, VStack } from '@/components/base-ui'
import { PanelProvider } from '@/contexts'
import { CreateDomain, DomainListTable } from '@/features/domain-list'

export const DomainListWrapper = () => {
  return (
    <PanelProvider>
      <VStack>
        <ToolbarContainer>
          <CreateDomain />
        </ToolbarContainer>
        <Card>
          <DomainListTable />
        </Card>
      </VStack>
    </PanelProvider>
  )
}
