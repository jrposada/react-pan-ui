import { PropsWithChildren } from 'react'

import './app-layout.scss'

interface AppLayoutProps {}

function AppLayout({ children }: PropsWithChildren<AppLayoutProps>) {
  let cssClass = 'app-layout'

  return <div className={cssClass}>{children}</div>
}

export default AppLayout
