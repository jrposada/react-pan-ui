import { PropsWithChildren } from 'react'

import './badge.scss'

interface BadgeProps {
  count?: number
  offset?: { top: number; right: number }
}

function Badge({ count, offset, children }: PropsWithChildren<BadgeProps>) {
  return (
    <div className="pan-ui-badge">
      {children}
      {!!count && (
        <span
          className="pan-ui-badge__count"
          style={{ marginTop: offset?.top, right: offset?.right }}
        >
          {count}
        </span>
      )}
    </div>
  )
}

export default Badge
export type { BadgeProps }
