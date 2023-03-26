import Badges from 'components/badges'
import Dots from 'components/dots'
import Dropdowns from 'components/dropdowns'
import Inputs from 'components/inputs'
import FormFields from 'components/form-fields'
import Tables from 'components/tables'
import AppBody from 'app-layout/app-body'
import Selects from 'components/selects'
import Buttons from 'components/buttons'

function ExamplesPage() {
  return (
    <AppBody>
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
    </AppBody>
  )
}

export default ExamplesPage
