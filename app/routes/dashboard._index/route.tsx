import axios from 'axios'
import type { LoaderFunctionArgs } from 'react-router'

import type { Route } from '.react-router/types/app/+types/root'
import { getDomainListRequest, useGetDomain } from '@/features/domain-list'
import {
  getMetaSettingsRequest,
  getTitleConfigsRequest,
  useGetMetaSetting,
  useGetTitleConfigs
} from '@/features/meta-setting'
import { PageContainer, PageTitle } from '@/layouts/dashboard'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Dashboard' },
    { name: 'description', content: 'Dashboard page' }
  ]
}

// export const loader = async ({ request }: LoaderFunctionArgs) => {
//   const token = request.headers
//     .get('cookie')
//     ?.split(';')
//     .find((c) => c.trim().startsWith('__ew-id='))
//     ?.split('=')[1]

//   const { data: domains } = await axios.get(
//     'https://be-admin.i88.dev/domains',
//     {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     }
//   )
//   const { data: metas } = await axios.get('https://be-admin.i88.dev/metas', {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   })

//   const { data: titles } = await axios.get(
//     `https://be-admin.i88.dev/meta-title-config/${metas.data?.[0].id}`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     }
//   )

//   return {
//     domains,
//     metas,
//     titles
//   }

// }

export const clientLoader = async ({}: LoaderFunctionArgs) => {
  const { data: domain } = await getDomainListRequest({ page: 1, limit: 10 })
  const { data: meta } = await getMetaSettingsRequest({ page: 1, limit: 10 })
  const { data: title } = await getTitleConfigsRequest(meta?.[0].id ?? '')

  return {
    domain,
    meta,
    title
  }
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  // const {} = useGetDomain({ page: 1, limit: 10 })
  // const { data } = useGetMetaSetting({ page: 1, limit: 10 })
  // const {} = useGetTitleConfigs({
  //   id: data?.data?.[0].id ?? ''
  // })
  console.log('loaderData', loaderData)
  return (
    <>
      <PageTitle title="Dashboard" />
      <PageContainer className="space-y-4"></PageContainer>
    </>
  )
}

export default HomePage
