import { CSSProperties, PropsWithChildren } from 'react'

interface MainBodyProps {
  className?: string
  style?: CSSProperties
}

function MainBody({
  className,
  style,
  children,
}: PropsWithChildren<MainBodyProps>) {
  let cssClass = 'main-layout__body'
  if (!!className) cssClass += ` ${className}`

  return (
    <div className={cssClass} style={style}>
      {children}
    </div>
  )
}

export default MainBody
