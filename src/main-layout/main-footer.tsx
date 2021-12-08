import { PropsWithChildren } from 'react'

interface MainFooterProps {
  className?: string
}

function MainFooter({
  className,
  children,
}: PropsWithChildren<MainFooterProps>) {
  let cssClass = 'main-layout__footer'
  if (!!className) cssClass += ` ${className}`

  return <div className={cssClass}>{children}</div>
}

export default MainFooter
