import { PropsWithChildren } from 'react'

interface MainHeaderProps {
  className?: string
}
function MainHeader({
  className,
  children,
}: PropsWithChildren<MainHeaderProps>) {
  let cssClass = 'main-layout__header'
  if (!!className) cssClass += ` ${className}`

  return <div className={cssClass}>{children}</div>
}

export default MainHeader
export type { MainHeaderProps }
