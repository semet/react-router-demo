import { Link, Outlet } from 'react-router'

const DashboardLayout = () => {
  return (
    <div>
      <nav>
        <ul className="flex space-x-4">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default DashboardLayout

const links = [
  { to: '/', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'contact', label: 'Contact' }
]
