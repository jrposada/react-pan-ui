import { faSpinner, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  ChangeEventHandler,
  HTMLProps,
  ReactNode,
  useCallback,
  useState,
} from 'react'

import './input.scss'

type InputVariant = 'primary' | 'secondary' | 'contrast' | 'success' | 'danger'

interface InputProps extends HTMLProps<HTMLInputElement> {
  variant?: InputVariant
  rounded?: boolean
  loading?: boolean
  icon?: ReactNode
  clearable?: boolean
  error?: ReactNode
  noError?: boolean
}

function Input({
  variant,
  rounded,
  loading,
  icon,
  clearable,
  error,
  noError,
  className,
  onChange,
  ...restProps
}: InputProps) {
  const [value, setValue] = useState('')

  let cssClass = 'pan-ui-input'
  let clearCssClass = 'pan-ui-input__clear'

  if (!!noError) cssClass += ' pan-ui-input--no-error'

  if (value === '' || !!restProps.disabled)
    clearCssClass += ' pan-ui-input__clear--hidden'

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setValue(event.target.value)
      onChange?.(event)
    },
    [onChange]
  )

  const clear = useCallback(() => {
    setValue('')
  }, [])

  return (
    <div className={cssClass}>
      <div className="pan-ui-input__input-wrapper">
        {(!!icon || !!loading) && (
          <div className="pan-ui-input__icon">
            {!!loading ? <FontAwesomeIcon icon={faSpinner} spin /> : icon}
          </div>
        )}
        <input
          {...restProps}
          className="pan-ui-input__input"
          value={value}
          onChange={handleOnChange}
        />
        {!!clearable && (
          <FontAwesomeIcon
            className={clearCssClass}
            width={8}
            height={8}
            icon={faTimesCircle}
            onClick={clear}
          />
        )}
      </div>
      {!noError && <div className="pan-ui-input__error">{error}</div>}
    </div>
  )
}

export default Input
export type { InputProps }
