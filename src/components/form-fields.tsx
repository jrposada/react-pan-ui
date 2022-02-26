import FormField from 'lib/form/form-field/form-field'

function FormFields() {
  return (
    <>
      FormFields
      <div style={{ display: 'flex', gap: '15px' }}>
        <FormField
          label="Label"
          layout="vertical"
          showError
          error="Error"
          required
        >
          <input />
        </FormField>
        <FormField label="Label" layout="horizontal" showError error="Error">
          <input />
        </FormField>
      </div>
    </>
  )
}

export default FormFields
