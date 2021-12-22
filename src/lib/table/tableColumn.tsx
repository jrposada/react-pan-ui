import { PropsWithChildren } from 'react'

function TableColumn({ children }: PropsWithChildren<{}>) {
  return <td>{children}</td>
}

export default TableColumn
