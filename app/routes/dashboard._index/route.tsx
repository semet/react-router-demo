import type { Route } from '.react-router/types/app/+types/root'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' }
  ]
}

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to React Router!</h1>
    </div>
  )
}

export default HomePage
