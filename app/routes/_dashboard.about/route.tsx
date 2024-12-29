import type { FC } from 'react'

import type { Route } from './+types/route'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'About Page' }]
}

export const clientLoader = async (_: Route.ClientLoaderArgs) => {
  return {
    name: 'AboutPage'
  }
}

export function HydrateFallback() {
  return <p>Loading Game...</p>
}
const AboutPage: FC<Route.ComponentProps> = ({ loaderData }) => {
  return (
    <div>
      <p>{loaderData.name}</p>
    </div>
  )
}

export default AboutPage
