import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HTMLProps, ReactNode, memo, PropsWithChildren } from 'react'

import './button.scss'

type ButtonVariant = 'primary' | 'secondary' | 'contrast' | 'success' | 'danger'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  variant?: ButtonVariant
  rounded?: boolean
  loading?: boolean
  noEvents?: boolean
  disabled?: boolean
  icon?: ReactNode
}

const Button = memo(function Button({
  variant,
  rounded,
  loading,
  noEvents,
  icon,
  className,
  children,
  disabled,
  type,
  ...restProps
}: PropsWithChildren<ButtonProps>) {
  let cssClass = 'pan-ui-button'
  switch (variant) {
    case 'primary':
      cssClass += ' pan-ui-button--primary'
      break
    case 'secondary':
      cssClass += ' pan-ui-button--secondary'
      break
    case 'contrast':
      cssClass += ' pan-ui-button--contrast'
      break
    case 'success':
      cssClass += ' pan-ui-button--success'
      break
    case 'danger':
      cssClass += ' pan-ui-button--danger'
      break
  }
  if (!!rounded) cssClass += ' pan-ui-button--rounded'
  if (!!noEvents) cssClass += ' pan-ui-button--no-events'
  if (!!loading) cssClass += ' pan-ui-button--loading'
  if (!!icon) cssClass += ' pan-ui-button--icon'
  if (!children) cssClass += ' pan-ui-button-fab'
  if (!!className) cssClass += ` ${className}`

  return (
    <button {...restProps} className={cssClass} disabled={disabled || loading}>
      <div>{children}</div>
      {(!!icon || !!loading) && (
        <div className="pan-ui-button__icon">
          {!!loading ? <FontAwesomeIcon icon={faSpinner} spin /> : icon}
        </div>
      )}
    </button>
  )
})

export default Button
export type { ButtonProps, ButtonVariant as ButtonType }
