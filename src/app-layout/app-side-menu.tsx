import { CSSProperties, PropsWithChildren } from 'react'

interface AppSideMenuProps {
  className?: string
  style?: CSSProperties
}

function AppSideMenu({
  className,
  style,
  children,
}: PropsWithChildren<AppSideMenuProps>) {
  let cssClass = 'app-layout__side-menu'
  if (!!className) cssClass += ` ${className}`

  return (
    <div className={cssClass} style={style}>
      {children}
    </div>
  )
}

export default AppSideMenu
export type { AppSideMenuProps }
