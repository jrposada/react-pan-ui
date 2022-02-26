import Table, { Column, Header } from 'lib/table/table'
import { useMemo } from 'react'

interface TableData {
  name: string
  surname: string
  email: string
}

function Tables() {
  const data: TableData[] = [
    { name: 'Paco', surname: 'Piedras', email: 'paco.piedras@gmail.com' },
    { name: 'Juan', surname: 'Piernas', email: 'juan.piernas@gmail.com' },
    { name: 'Alberto', surname: 'Palos', email: 'alberto.palos@gmail.com' },
  ]

  const headers: Header[] = useMemo(
    () => [
      { render: () => <>Name</> },
      { render: () => <>Surname</> },
      { render: () => <>Email</> },
    ],
    []
  )

  const columns: Column<TableData>[] = useMemo(
    () => [
      { render: (data) => <>{data.name}</> },
      { render: (data) => <>{data.surname}</> },
      { render: (data) => <>{data.email}</> },
    ],
    []
  )

  return <Table data={data} headers={headers} columns={columns} />
}

export default Tables
