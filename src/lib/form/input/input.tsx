import {
  faCaretDown,
  faCaretUp,
  faSpinner,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  ChangeEventHandler,
  FocusEventHandler,
  ReactNode,
  createRef,
  useCallback,
  useEffect,
  useState,
} from 'react'
import FormField, { FormFieldProps } from '../form-field/form-field'

import './input.scss'

type InputType = 'text' | 'password' | 'number'
type InputValue = string | ReadonlyArray<string> | number

interface InputProps extends FormFieldProps {
  // General input props
  type?: InputType
  defaultValue?: InputValue
  placeholder?: string
  disabled?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>

  // Numeric input props
  step?: number
  min?: number
  max?: number

  // Other props
  icon?: ReactNode
  loading?: boolean
  clearable?: boolean
}

function Input({
  type = 'text',
  defaultValue,
  placeholder,
  disabled,
  onChange,
  onFocus,
  onBlur,

  step = 1,
  min,
  max,

  icon,
  loading,
  clearable,
  ...formFieldProps
}: InputProps) {
  const inputRef = createRef<HTMLInputElement>()

  const [value, setValue] = useState(defaultValue ?? '')
  const [isFocus, setIsFocus] = useState(false)

  let cssClass = 'pan-ui-input'
  if (isFocus) cssClass += ' pan-ui-input--focus'
  if (!!disabled || !!loading) cssClass += ' pan-ui-input--disabled'
  if (!!loading) cssClass += ' pan-ui-input--loading'
  if (!!formFieldProps.error) cssClass += ' pan-ui-input--error'

  /** Sets value and propagates onChange event. */
  const handleOnChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setValue(event.target.value)
      onChange?.(event)
    },
    [onChange]
  )

  /** Set isFocused and propagate onFocus event. */
  const handleOnFocus: FocusEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setIsFocus(true)
      onFocus?.(event)
    },
    [onFocus]
  )

  /** Clears isFocused and propagate on blur event. */
  const handleOnBlur: FocusEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setIsFocus(false)
      onBlur?.(event)
    },
    [onBlur]
  )

  /** Set value to empty string and keep focus. */
  const clear = useCallback(() => {
    setValue('')
    inputRef.current?.focus()
  }, [inputRef])

  /** Increase value by 1 step */
  const increment = useCallback(() => {
    setValue(+value + step)
    inputRef.current?.focus()
  }, [inputRef, step, value])

  /** Decrease value by 1 step */
  const decrement = useCallback(() => {
    setValue(+value - step)
    inputRef.current?.focus()
  }, [inputRef, step, value])

  /** Reset value to default value when default value changes. */
  useEffect(() => {
    setValue(defaultValue ?? '')
  }, [defaultValue])

  return (
    <FormField {...formFieldProps}>
      <div className={cssClass}>
        {(!!icon || !!loading) && (
          <div className="pan-ui-input__icon">
            {!!loading ? <FontAwesomeIcon icon={faSpinner} spin /> : icon}
          </div>
        )}
        <input
          ref={inputRef}
          type={type}
          id={formFieldProps.id}
          value={value}
          placeholder={placeholder}
          disabled={disabled || loading}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          min={min}
          max={max}
        />
        {!!clearable &&
          !disabled &&
          (!!value || value === 0) &&
          value !== '' && (
            <FontAwesomeIcon
              className="pan-ui-input__clear"
              icon={faTimesCircle}
              onClick={clear}
            />
          )}
        {type === 'number' && (
          <div className="pan-ui-input__counter">
            <div onClick={increment} className="pan-ui-input__counter-button">
              <FontAwesomeIcon data-testid="counter-plus" icon={faCaretUp} />
            </div>
            <div onClick={decrement} className="pan-ui-input__counter-button">
              <FontAwesomeIcon data-testid="counter-minus" icon={faCaretDown} />
            </div>
          </div>
        )}
      </div>
    </FormField>
  )
}

export default Input
export type { InputProps, InputType, InputValue }
