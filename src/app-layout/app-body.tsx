import { CSSProperties, PropsWithChildren } from 'react'

interface AppBodyProps {
  className?: string
  style?: CSSProperties
}

function AppBody({
  className,
  style,
  children,
}: PropsWithChildren<AppBodyProps>) {
  let cssClass = 'app-layout__body'
  if (!!className) cssClass += ` ${className}`

  return (
    <div className={cssClass} style={style}>
      {children}
    </div>
  )
}

export default AppBody
