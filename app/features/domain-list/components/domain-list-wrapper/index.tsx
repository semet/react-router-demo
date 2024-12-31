import { Card, ToolbarContainer } from '@/components/base-ui'
import { PanelProvider } from '@/contexts'
import { CreateDomain, DomainListTable } from '@/features/domain-list'

export const DomainListWrapper = () => {
  return (
    <PanelProvider>
      <section className="flex flex-col gap-4">
        <ToolbarContainer className="flex flex-col gap-4 md:flex-row md:items-end md:justify-end">
          <CreateDomain />
        </ToolbarContainer>
        <Card>
          <DomainListTable />
        </Card>
      </section>
    </PanelProvider>
  )
}
