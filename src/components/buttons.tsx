import { useCallback, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import Button, { ButtonProps } from 'lib/button/button'

const types: ButtonProps[] = [
  { variant: 'primary' },
  { variant: 'secondary' },
  { variant: 'contrast' },
  { variant: 'success' },
  { variant: 'danger' },
  {},
]

const modifiers: ButtonProps[] = [
  { rounded: true, icon: <FontAwesomeIcon icon={faUser} /> },
  { rounded: true },
  { rounded: true, disabled: true },
  { rounded: true, loading: true },

  { icon: <FontAwesomeIcon icon={faUser} /> },
  {},
  { disabled: true },
  { loading: true },

  { noEvents: true },
]

function Buttons() {
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
      Buttons
      <div style={{ display: 'flex', gap: '15px' }}>
        {types.map((buttonType, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              alignItems: 'center',
            }}
          >
            {modifiers.map((modifier, j) => (
              <Button key={j} {...buttonType} {...modifier}>
                {buttonType.variant ?? 'default'}
              </Button>
            ))}
            <Button
              {...buttonType}
              onClick={setIsLoadingFor(2000)}
              loading={isLoading}
              icon={<FontAwesomeIcon icon={faUser} />}
            >
              {buttonType.variant ?? 'default'}
            </Button>
            <Button
              {...buttonType}
              onClick={setIsLoadingFor(2000)}
              loading={isLoading}
            >
              {buttonType.variant ?? 'default'}
            </Button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Buttons
