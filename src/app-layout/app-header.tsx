import { CSSProperties, PropsWithChildren } from 'react'

interface AppHeaderProps {
  className?: string
  style?: CSSProperties
}

function AppHeader({
  className,
  style,
  children,
}: PropsWithChildren<AppHeaderProps>) {
  let cssClass = 'app-layout__header'
  if (!!className) cssClass += ` ${className}`

  return (
    <div className={cssClass} style={style}>
      {children}
    </div>
  )
}

export default AppHeader
export type { AppHeaderProps }
