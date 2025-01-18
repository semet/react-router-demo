import type { Route } from '.react-router/types/app/+types/root'
import { PageContainer, PageTitle } from '@/layouts/dashboard'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Dashboard' },
    { name: 'description', content: 'Dashboard page' }
  ]
}

export const loader = async ({}: Route.LoaderArgs) => {
  return true
}

const HomePage = () => {
  return (
    <>
      <PageTitle title="Dashboard" />
      <PageContainer className="space-y-4"></PageContainer>
    </>
  )
}

export default HomePage
