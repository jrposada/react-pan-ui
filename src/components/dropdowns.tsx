import Dropdown, { DropdownProps } from 'lib/dropdown/dropdown'

const modifiers: Omit<DropdownProps, 'panel'>[] = [
  { position: 'bottom-left' },
  { position: 'bottom-right' },
  { position: 'top-right', trigger: 'click' },
  { position: 'top-left' },
  { trigger: 'click' },
  { trigger: 'hover' },
  { closeOnPanelClick: true },
  { limitPanel: true },
  { disabled: true },
]

function Dropdowns() {
  const panel = (
    <div style={{ padding: '8px 16px', backgroundColor: 'green' }}>
      <div>Paco</div>
      <div>Juan</div>
      <div>Alberto</div>
    </div>
  )

  return (
    <>
      Dropdowns
      <div style={{ display: 'flex', gap: '15px' }}>
        {modifiers.map((modifier, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              alignItems: 'center',
            }}
          >
            <Dropdown {...modifier} panel={panel}>
              <div style={{ padding: '8px 16px', backgroundColor: 'cyan' }}>
                Label {modifier.position}
              </div>
            </Dropdown>
          </div>
        ))}
      </div>
    </>
  )
}

export default Dropdowns
