import { Formik } from 'formik'
import { act, fireEvent, render, screen } from 'testUtils'
import SubmitButton from 'uiLib/form/submitButton'
import Select from 'uiLib/select/select'

jest.unmock('formik')

describe.skip('Given a Select componente', () => {
  beforeEach(() => {
    render(
      <Formik initialValues={{ name: 'paco' }} onSubmit={() => {}}>
        <>
          <Select name="name">
            <Select.Option value="juan">juan-option</Select.Option>
            <Select.Option value="paco">paco-option</Select.Option>
            <Select.Option value="alberto">alberto-option</Select.Option>
          </Select>
          <SubmitButton data-testid="submit" />
        </>
      </Formik>
    )
  })

  it('when first render, formik initial value option children is rendered as trigger', () => {
    expect(screen.getByTestId('value')).toHaveTextContent('paco-option')
  })
  it('when an option is clicked then its children is rendered as trigger', () => {
    act(() => {
      fireEvent.click(screen.getByTestId('trigger'))
      fireEvent.click(screen.getAllByTestId('option-alberto')[1])
    })

    expect(screen.getByTestId('value')).toHaveTextContent('alberto-option')
  })
})
