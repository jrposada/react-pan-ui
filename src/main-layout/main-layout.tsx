import { PropsWithChildren } from 'react'

import MainHeader from './main-header'
import MainBody from './main-body'
import MainFooter from './main-footer'

import './main-layout.scss'

interface MainLayoutProps {
  className?: string
}

function MainLayout({
  className,
  children,
}: PropsWithChildren<MainLayoutProps>) {
  let cssClass = 'main-layout'
  if (!!className) cssClass += ` ${className}`

  return <div className={cssClass}>{children}</div>
}
MainLayout.Header = MainHeader
MainLayout.Body = MainBody
MainLayout.Footer = MainFooter

export default MainLayout
