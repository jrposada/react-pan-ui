import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from 'lib/form/input/input'

function Inputs() {
  return (
    <div style={{ display: 'flex', gap: 15 }}>
      <Input clearable />
      <Input disabled clearable />
      <Input loading clearable />
      <Input icon={<FontAwesomeIcon icon={faUser} />} clearable />
      <Input disabled icon={<FontAwesomeIcon icon={faUser} />} clearable />
      <Input error="Error" icon={<FontAwesomeIcon icon={faUser} />} clearable />
      <Input
        disabled
        loading
        icon={<FontAwesomeIcon icon={faUser} />}
        clearable
      />
      <Input type="number" clearable />
    </div>
  )
}

export default Inputs
