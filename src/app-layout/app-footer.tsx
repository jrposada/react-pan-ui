import { CSSProperties, PropsWithChildren } from 'react'

interface AppFooterProps {
  className?: string
  style?: CSSProperties
}

function AppFooter({
  className,
  style,
  children,
}: PropsWithChildren<AppFooterProps>) {
  let cssClass = 'app-layout__footer'
  if (!!className) cssClass += ` ${className}`

  return (
    <div className={cssClass} style={style}>
      {children}
    </div>
  )
}

export default AppFooter
