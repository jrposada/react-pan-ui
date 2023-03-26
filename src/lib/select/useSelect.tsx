import { useContext } from 'react'

import SelectContext from './selectContext'

function useSelect() {
  const context = useContext(SelectContext)

  if (!context) throw new Error('No select context.')

  return context
}

export default useSelect
