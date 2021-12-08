import { PropsWithChildren } from 'react'

interface MainBodyProps {
  className?: string
}

function MainBody({ className, children }: PropsWithChildren<MainBodyProps>) {
  let cssClass = 'main-layout__body'
  if (!!className) cssClass += ` ${className}`

  return <div className={cssClass}>{children}</div>
}

export default MainBody
