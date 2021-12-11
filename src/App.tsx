import { BrowserRouter as Router } from 'react-router-dom'

import MainLayout from 'main-layout/main-layout'

import 'lib/styles.scss'
import './App.scss'
import MainBody from 'main-layout/main-body'
import ExamplesPage from 'main-layout/pages/examples-page'

function App() {
  return (
    <Router>
      <MainLayout>
        <MainBody>
          <ExamplesPage />
        </MainBody>
      </MainLayout>
    </Router>
  )
}

export default App
