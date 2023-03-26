import {
  createRef,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Dropdown from 'lib/dropdown/dropdown'
import FormField, { FormFieldProps } from 'lib/form/form-field/form-field'

import SelectOption from './selectOption'
import SelectContext, {
  SelectContextValue,
  SelectValue,
  SelectValueChildren,
} from './selectContext'

import './select.scss'

interface SelectProps<TValue> extends FormFieldProps {
  onChange?: (value: TValue) => void
  // id?: string
  // label?: ReactNode
  // required?: boolean
  // error?: string
  // showError?: boolean
  // layout?: FormFieldLayout
}

function Select<TValue extends SelectValue = any>({
  children,
  ...formFieldProps
}: PropsWithChildren<SelectProps<TValue>>) {
  const selectRef = createRef<HTMLSelectElement>()

  const [value, setValue] = useState<TValue>()
  const [valueChildren, setValueChildren] = useState<SelectValueChildren>({
    children: undefined,
  })
  const [defaultValue, setDefaultValue] = useState<TValue>()
  const [defaultValueChildren, setDefaultValueChildren] =
    useState<SelectValueChildren>({
      children: undefined,
    })

  const context = useMemo(
    () =>
      ({
        setValue,
        setValueChildren,
        setDefaultValue,
        setDefaultValueChildren,
        root: selectRef.current,
      } as SelectContextValue),
    [selectRef]
  )

  /** Set value and children to that of default when default changes. */
  useEffect(() => {
    setValue(defaultValue)
    setValueChildren(defaultValueChildren)
  }, [defaultValue, defaultValueChildren])

  return (
    <SelectContext.Provider value={context}>
      <FormField {...formFieldProps}>
        <select ref={selectRef} hidden value={value} />
        <Dropdown panel={children} trigger="click">
          {valueChildren.children}
        </Dropdown>
      </FormField>
    </SelectContext.Provider>
  )
}
Select.Option = SelectOption

export default Select
export type { SelectProps }

// const selectRef = createRef<HTMLSelectElement>()
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [value, setValue] = useState<TValue>(meta?.initialValue)
//   const [child, setChild] = useState<{ child: ReactNode }>()
//   const [defaultOption, setDefaultOption] = useState<{ value: TValue; children?: ReactNode }>({
//     value: meta?.initialValue,
//   })

//   let cssClass = 'rutile-select'
//   let valueCssClass = 'rutile-select__value'
//   if (!!noError) cssClass += ' rutile-select--no-error'
//   if (!!className) cssClass += ` ${className}`
//   if (!child?.child) valueCssClass += ' rutile-select__value--placeholder'

//   const context: SelectContextValue<TValue> = useMemo(
//     () => ({
//       name,
//       setValue,
//       setChild,
//       setDefaultOption,
//     }),
//     [name]
//   )

//   const clear = useCallback(() => {
//     setValue(undefined as any)
//     setChild({ child: undefined })
//   }, [])

//   // Update formik value when value is changed
//   useEffect(() => {
//     if (value !== field?.value) {
//       // Option selected, update formik value
//       helpers?.setValue(value)
//       helpers?.setTouched(true)
//       onChange?.(value)
//     }

//     // We only want to update it if selected changes. helpers changes on each render.
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [value])

//   // Update child when formik value is reset.
//   useEffect(() => {
//     if (field?.value === defaultOption.value) {
//       // Is a reset if formik value is default.

//       // We need to update our internal value to that of reset
//       // We also need to update child to that of default
//       setValue(defaultOption.value)
//       setChild({ child: defaultOption.children })
//     }
//   }, [defaultOption.children, defaultOption.value, field?.value])

//   // If formik value changes to default guarantee selected has the correct children.
//   useEffect(() => {
//     setChild({ child: defaultOption.children })
//     helpers?.setTouched(false)

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [defaultOption.children, defaultOption.value])

//   return (
//     <SelectContext.Provider value={context}>
//       <div className={cssClass}>
//         <select ref={selectRef} hidden {...field} value={field?.value ?? ''}>
//           {children}
//         </select>
//         {!!label && <label className="rutile-select__label">{label}</label>}
//         <Dropdown
//           className={cssClass}
//           panel={<>{children}</>}
//           trigger="click"
//           closeOnPanelClick
//           limitPanel
//           disabled={loading}
//         >
//           <div className="rutile-select__trigger" data-testid="trigger">
//             <div className={valueCssClass} data-testid="value">
//               {child?.child ?? placeholder}
//               {suffix}
//             </div>
//             {!!clearable && !!value && (
//               <FontAwesomeIcon
//                 data-testid="clear-icon"
//                 className="rutile-select__clear"
//                 width={8}
//                 height={8}
//                 icon={faTimesCircle}
//                 onClick={clear}
//               />
//             )}
//             <div className="rutile-select__divider" />
//             <FontAwesomeIcon icon={loading ? faSpinner : icon ?? faSort} spin={loading} />
//           </div>
//         </Dropdown>
//         {!noError && (
//           <div data-testid="error" className="rutile-select__error">
//             {error ?? (!!meta?.touched && !!meta?.error ? meta?.error : false)}
//           </div>
//         )}
//       </div>
//     </SelectContext.Provider>
//   )
