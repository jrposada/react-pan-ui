import { useMemo } from 'react'

type DotColor = 'primary' | 'secondary' | 'danger' | 'success'

interface DotProps {
  size: number
  color: DotColor | string
}

function Dot({ size, color }: DotProps) {
  const radius = size / 2

  const cssColor = useMemo(() => {
    switch (color) {
      case 'danger':
      case 'primary':
      case 'secondary':
      case 'success':
        return `var(--pan-ui-palette-${color})`
      default:
        return color
    }
  }, [color])

  return (
    <div
      style={{
        borderRadius: radius,
        height: size,
        width: size,
        backgroundColor: cssColor,
      }}
    />
  )
}

export default Dot
export type { DotColor, DotProps }
