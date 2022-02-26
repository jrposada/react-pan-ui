import { ChangeEventHandler, PropsWithChildren, useCallback } from 'react'

interface TableHeaderProps<TData = unknown> {
  index?: string | string[]
  filter?: (data: TData) => boolean
}

function TableHeader<TData = unknown>({
  index,
  filter,
  children,
}: PropsWithChildren<TableHeaderProps<TData>>) {
  const onFilterValueChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {},
    []
  )

  return (
    <th>
      {children}
      <input onChange={onFilterValueChange} />
    </th>
  )
}

export default TableHeader
export type { TableHeaderProps }
