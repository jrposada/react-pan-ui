import { CSSProperties, PropsWithChildren } from 'react'

interface MainFooterProps {
  className?: string
  style?: CSSProperties
}

function MainFooter({
  className,
  style,
  children,
}: PropsWithChildren<MainFooterProps>) {
  let cssClass = 'main-layout__footer'
  if (!!className) cssClass += ` ${className}`

  return (
    <div className={cssClass} style={style}>
      {children}
    </div>
  )
}

export default MainFooter
