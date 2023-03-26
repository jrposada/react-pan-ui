import { createContext, Dispatch, ReactNode, SetStateAction } from 'react'

type SelectValue = string | number | readonly string[] | undefined
type SelectValueChildren = { children: ReactNode | undefined }

interface SelectContextValue<TValue extends SelectValue = any> {
  // name?: string
  root: HTMLSelectElement | null
  setValue: Dispatch<SetStateAction<TValue>>
  setValueChildren: Dispatch<SetStateAction<SelectValueChildren>>
  setDefaultValue: Dispatch<SetStateAction<TValue>>
  setDefaultValueChildren: Dispatch<SetStateAction<SelectValueChildren>>
}

const SelectContext = createContext<SelectContextValue | undefined>(undefined)

export default SelectContext
export type { SelectContextValue, SelectValue, SelectValueChildren }
