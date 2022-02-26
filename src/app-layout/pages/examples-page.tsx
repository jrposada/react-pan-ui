import Badges from 'components/badges'
import Dots from 'components/dots'
import Dropdowns from 'components/dropdowns'
import Inputs from 'components/inputs'
import FormFields from 'components/form-fields'
import Tables from 'components/tables'
import AppBody from 'app-layout/app-body'

function ExamplesPage() {
  return (
    <AppBody>
      <Badges />
      <Dots />
      <FormFields />
      <Dropdowns />
      <Tables />
      <Inputs />
    </AppBody>
  )
}

export default ExamplesPage
