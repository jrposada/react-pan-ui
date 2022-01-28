import { PropsWithChildren, ReactNode } from 'react'

import './form-field.scss'

type FormFieldLayout = 'vertical' | 'horizontal'

interface FormFieldProps {
  id?: string
  label?: ReactNode
  error?: string
  showError?: boolean
  layout?: FormFieldLayout
}

function FormField({
  id,
  label,
  error,
  showError,
  layout = 'vertical',
  children,
}: PropsWithChildren<FormFieldProps>) {
  let cssClass = 'pan-ui-form-field'
  if (!!layout) cssClass += ` pan-ui-form-field--${layout}`

  return (
    <div className={cssClass}>
      {!!label && <label htmlFor={id}>{label}</label>}
      <div>
        {children}
        {!!showError && <div className="pan-ui-form-field__error">{error}</div>}
      </div>
    </div>
  )
}

export default FormField
