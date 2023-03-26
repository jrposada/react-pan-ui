import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactNode, PropsWithChildren, MouseEventHandler, useMemo } from 'react'

import './button.scss'

const BASE_CSS_CLASS = 'pan-ui-button'

type ButtonVariant = 'primary' | 'secondary' | 'contrast' | 'success' | 'danger'

interface ButtonProps {
  className?: string
  disabled?: boolean
  icon?: ReactNode
  loading?: boolean
  noEvents?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  rounded?: boolean
  style?: string
  variant?: ButtonVariant
}

function Button({
  className,
  disabled,
  icon,
  loading,
  noEvents,
  onClick,
  rounded,
  style,
  variant,
  children,
}: PropsWithChildren<ButtonProps>) {
  const cssClass = useMemo<string>(() => {
    let result = BASE_CSS_CLASS

    if (!!variant) result += ` ${BASE_CSS_CLASS}--${variant}`
    if (!!rounded) result += ` ${BASE_CSS_CLASS}--rounded`
    if (!!noEvents) result += ` ${BASE_CSS_CLASS}--no-events`
    if (!!loading) result += ` ${BASE_CSS_CLASS}--loading`
    if (!!icon) result += ` ${BASE_CSS_CLASS}--icon`
    if (!children) result += ` ${BASE_CSS_CLASS}--fab`
    if (!!className) result += ` ${className}`

    return result
  }, [])

  return (
    <button
      className={cssClass}
      disabled={disabled || loading}
      onClick={onClick}
    >
      <div>{children}</div>
      {(!!icon || !!loading) && (
        <div className={`${BASE_CSS_CLASS}__icon`}>
          {!!loading ? <FontAwesomeIcon icon={faSpinner} spin /> : icon}
        </div>
      )}
    </button>
  )
}

export default Button
export type { ButtonProps, ButtonVariant }
