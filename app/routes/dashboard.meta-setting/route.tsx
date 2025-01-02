import { PaginationProvider } from '@/contexts'
import { MetaSettingWrapper } from '@/features/meta-setting'
import { PageContainer, PageTitle } from '@/layouts/dashboard'

import type { Route } from './+types/route'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Meta Settings' },
    { name: 'description', content: 'Meta Settings page' }
  ]
}

const MetaSettingPage = () => {
  return (
    <>
      <PageTitle title="meta Setting" />
      <PageContainer className="space-y-4">
        <PaginationProvider>
          <MetaSettingWrapper />
        </PaginationProvider>
      </PageContainer>
    </>
  )
}

export default MetaSettingPage
