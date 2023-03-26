import Select from 'lib/select/select'

function Selects() {
  return (
    <div>
      <Select>
        <Select.Option value={1}>Option 1</Select.Option>
        <Select.Option value={2} selected>
          Option 2
        </Select.Option>
        <Select.Option value={3}>Option 3</Select.Option>
      </Select>
    </div>
  )
}

export default Selects
