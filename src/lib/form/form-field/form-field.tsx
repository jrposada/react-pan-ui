import { PropsWithChildren, ReactNode } from 'react'

import './form-field.scss'

type FormFieldLayout = 'vertical' | 'horizontal'

interface FormFieldProps {
  id?: string
  label?: ReactNode
  required?: boolean
  error?: string
  showError?: boolean
  layout?: FormFieldLayout
}

function FormField({
  id,
  label,
  required,
  error,
  showError,
  layout = 'vertical',
  children,
}: PropsWithChildren<FormFieldProps>) {
  let cssClass = 'pan-ui-form-field'
  if (!!layout) cssClass += ` pan-ui-form-field--${layout}`

  return (
    <div className={cssClass}>
      {!!label && (
        <label htmlFor={id}>
          {label}
          {!!required && <span className="pan-ui-form-field__required">*</span>}
        </label>
      )}
      <div>
        {children}
        {!!showError && <div className="pan-ui-form-field__error">{error}</div>}
      </div>
    </div>
  )
}

export default FormField
export type { FormFieldProps }
