import Badge from 'lib/badge/badge'

function Badges() {
  return (
    <>
      Buttons
      <div style={{ display: 'flex', gap: '15px' }}>
        <Badge count={5}>Badge</Badge>
      </div>
    </>
  )
}

export default Badges
