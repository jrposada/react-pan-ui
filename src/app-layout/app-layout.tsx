import { PropsWithChildren } from 'react'

import AppBody from './app-body'
import AppHeader from './app-header'
import AppFooter from './app-footer'
import AppSideMenu from './app-side-menu'

import './app-layout.scss'

interface AppLayoutProps {}

function AppLayout({ children }: PropsWithChildren<AppLayoutProps>) {
  let cssClass = 'app-layout'

  return <div className={cssClass}>{children}</div>
}

AppLayout.Header = AppHeader
AppLayout.SideMenu = AppSideMenu
AppLayout.Body = AppBody
AppLayout.Footer = AppFooter

export default AppLayout
