import { useCallback, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import Input, { InputProps } from 'lib/input/input'

const types: InputProps[] = [
  { variant: 'primary', placeholder: 'Example...', error: 'required' },
  // { variant: 'secondary', placeholder: 'Example...', error: 'required' },
  // { variant: 'contrast', placeholder: 'Example...', error: 'required' },
  // { variant: 'success', placeholder: 'Example...', error: 'required' },
  // { variant: 'danger', placeholder: 'Example...', error: 'required' },
  // { placeholder: 'Example...', error: 'required' },
]

const modifiers: InputProps[] = [
  { rounded: true, icon: <FontAwesomeIcon icon={faUser} />, noError: true },
  { rounded: true },
  { rounded: true, disabled: true },
  { rounded: true, loading: true },

  { icon: <FontAwesomeIcon icon={faUser} /> },
  {},
  { disabled: true },
  { loading: true },
]

function Inputs() {
  const [isLoading, setIsLoading] = useState(false)

  const setIsLoadingFor = useCallback(
    (milliseconds: number) => () => {
      setIsLoading(true)

      setTimeout(() => setIsLoading(false), milliseconds)
    },
    []
  )

  return (
    <>
      Inputs
      <div style={{ display: 'flex', gap: '15px' }}>
        {types.map((inputType) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              alignItems: 'center',
            }}
          >
            {modifiers.map((modifier) => (
              <Input {...inputType} {...modifier} />
            ))}
            <Input
              {...inputType}
              onClick={setIsLoadingFor(2000)}
              loading={isLoading}
              icon={<FontAwesomeIcon icon={faUser} />}
            />
            <Input
              {...inputType}
              onClick={setIsLoadingFor(2000)}
              loading={isLoading}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Inputs
