import { PaginationProvider } from '@/contexts'
import { DomainListWrapper } from '@/features/domain-list'
import { PageContainer, PageTitle } from '@/layouts/dashboard'

import type { Route } from './+types/route'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Domain List' },
    { name: 'description', content: 'Domain List page' }
  ]
}

const DomainListPage = () => {
  return (
    <>
      <PageTitle title="Domain List" />
      <PageContainer className="space-y-4">
        <PaginationProvider>
          <DomainListWrapper />
        </PaginationProvider>
      </PageContainer>
    </>
  )
}

export default DomainListPage
