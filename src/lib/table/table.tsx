import { ReactElement, useMemo } from 'react'
import TableColumn from './tableColumn'
import TableHeader from './tableHeader'
import TableRow from './tableRow'

interface Header {
  render: () => ReactElement
}

interface Column<TData> {
  render: (data: TData) => ReactElement
}

interface TableProps<TData> {
  data: TData[]
  headers?: Header[]
  columns?: Column<TData>[]
  filterOnBackend?: boolean
  onFilterChange?: () => void
}

function Table<TData>({ data, headers, columns }: TableProps<TData>) {
  const headersRow = useMemo(
    () =>
      !!headers && (
        <TableRow>
          {headers.map((header) => (
            <TableHeader>{header.render()}</TableHeader>
          ))}
        </TableRow>
      ),
    [headers]
  )

  const dataRow = useMemo(
    () =>
      !!columns &&
      data.map((rowData) => (
        <TableRow>
          {columns?.map((column) => (
            <TableColumn>{column.render(rowData)}</TableColumn>
          ))}
        </TableRow>
      )),
    [columns, data]
  )

  return (
    <table>
      {headersRow}
      {dataRow}
    </table>
  )
}

export default Table
export type { TableProps, Header, Column }
