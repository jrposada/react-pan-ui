import { BrowserRouter as Router } from 'react-router-dom'

import MainLayout from 'main-layout/main-layout'

import './App.scss'

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  )
}

export default App
