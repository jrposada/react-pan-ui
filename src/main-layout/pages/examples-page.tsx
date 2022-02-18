import Badges from 'components/badges'
import Buttons from 'components/buttons'
import Dots from 'components/dots'
import Dropdowns from 'components/dropdowns'
import Inputs from 'components/inputs'
import FormFields from 'components/form-fields'
import Tables from 'components/tables'
import Selects from 'components/selects'

function ExamplesPage() {
  return (
    <div style={{ padding: '16px 32px' }}>
      <Selects />
      <Dropdowns />
      <Buttons />
      <Badges />
      <Dots />
      <FormFields />
      <Dropdowns />
      <Tables />
      <Inputs />
    </div>
  )
}

export default ExamplesPage
