import Dot from 'lib/dot/dot'

function Dots() {
  return (
    <>
      Dots
      <div style={{ display: 'flex', gap: '15px' }}>
        <Dot size={16} color="danger" />
        <Dot size={16} color="primary" />
        <Dot size={16} color="secondary" />
        <Dot size={16} color="success" />
      </div>
    </>
  )
}

export default Dots
