import { PropsWithChildren, useCallback, useEffect } from 'react'

import { SelectValue } from './selectContext'
import useSelect from './useSelect'

import './selectOption.scss'
import { createPortal } from 'react-dom'

interface SelectOptionProps<TValue extends SelectValue = string> {
  value: TValue
  selected?: boolean
}

function SelectOption<TValue extends SelectValue = string>({
  value,
  selected,
  children,
}: PropsWithChildren<SelectOptionProps<TValue>>) {
  const {
    root,
    setValue,
    setValueChildren,
    setDefaultValue,
    setDefaultValueChildren,
  } = useSelect()

  const selectOption = useCallback(() => {
    setValue(value)
    setValueChildren({ children })
  }, [children, setValue, setValueChildren, value])

  /** If options is selected set as default in select context. */
  useEffect(() => {
    if (!!selected) {
      setDefaultValue(value)
      setDefaultValueChildren({ children })
    }
  }, [children, selected, setDefaultValue, setDefaultValueChildren, value])

  return (
    <>
      <div
        className="rutile-select-option"
        data-testid={`option-${value}`}
        onClick={selectOption}
      >
        {children}
      </div>
      {!!root && createPortal(<option value={value} hidden />, root)}
    </>
  )
}

export default SelectOption
export type { SelectOptionProps }
