import Dropdown, { DropdownProps } from 'lib/dropdown/dropdown'

const panel = (
  <div>
    <div>Paco</div>
    <div>Juan</div>
    <div>Alberto</div>
  </div>
)

const modifiers: DropdownProps[] = [
  { panel, position: 'bottom' },
  { panel, position: 'left' },
  { panel, position: 'right' },
  { panel, position: 'top' },
  { panel, trigger: 'click' },
  { panel, trigger: 'hover' },
]

function Dropdowns() {
  return (
    <>
      Dropdowns
      <div style={{ display: 'flex', gap: '15px' }}>
        {modifiers.map((modifier) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              alignItems: 'center',
            }}
          >
            <Dropdown {...modifier}>Label</Dropdown>
          </div>
        ))}
      </div>
    </>
  )
}

export default Dropdowns
