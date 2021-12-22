import { PropsWithChildren } from 'react'

interface TableRowProps {}

function TableRow({ children }: PropsWithChildren<TableRowProps>) {
  return <tr>{children}</tr>
}

export default TableRow
export type { TableRowProps }
