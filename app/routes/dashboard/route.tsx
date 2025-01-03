import Cookies from 'js-cookie'
import { Outlet, redirect, type ClientActionFunctionArgs } from 'react-router'

import { ID, IS_VERIFIED } from '@/configs/credentials'
import { MENUS } from '@/configs/storage'
import { EventSourceProvider, useLayout } from '@/contexts'
import {
  ContentWrapper,
  Header,
  menus,
  MobileSidebar,
  PagePreloader,
  ScrollToTop,
  SidebarContainer
} from '@/layouts/dashboard'

export const clientLoader = async ({ request }: ClientActionFunctionArgs) => {
  const token = Cookies.get(ID)
  const isVerified = Cookies.get(IS_VERIFIED)
  const enabledMenu = localStorage.getItem(MENUS)
  const parsedMenu = enabledMenu ? JSON.parse(enabledMenu) : []
  const pathname = new URL(request.url).pathname
  const rootPath = pathname
    .split('/')
    .filter((_, index) => index <= 2)
    .join('/')
  const isMenuValid = menus
    .flatMap((item) => item.subs || []) // Flatten the menu children
    .some(
      (item) => item.href === rootPath && parsedMenu.includes(item.code ?? '')
    )

  if (!token) {
    throw redirect('/auth')
  }
  if (!isVerified || isVerified === 'false') {
    throw redirect('/auth/pin')
  }

  if (!isMenuValid && pathname !== '/dashboard') {
    throw redirect('/dashboard')
  }
  return true
}

export function HydrateFallback() {
  return <PagePreloader />
}

const DashboardLayout = () => {
  const { containerWidth } = useLayout()

  return (
    <EventSourceProvider>
      <div className="flex min-h-screen">
        <div className="bg-primary">
          <SidebarContainer />
          <MobileSidebar />
        </div>
        <div
          className="flex flex-1 flex-col"
          style={{
            maxWidth: containerWidth
          }}
        >
          <Header />
          <ContentWrapper>
            <Outlet />
            <ScrollToTop />
          </ContentWrapper>
        </div>
      </div>
    </EventSourceProvider>
  )
}

export default DashboardLayout
