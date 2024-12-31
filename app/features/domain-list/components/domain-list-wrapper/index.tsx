import { Card, ToolbarContainer } from '@/components/base-ui'
import { CreateDomain, DomainListTable } from '@/features/domain-list'

export const DomainListWrapper = () => {
  return (
    <section className="flex flex-col gap-4">
      <ToolbarContainer className="flex flex-col gap-4 md:flex-row md:items-end md:justify-end">
        <CreateDomain />
      </ToolbarContainer>
      <Card>
        <DomainListTable />
      </Card>
    </section>
  )
}
