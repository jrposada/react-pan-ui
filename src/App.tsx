import AppLayout from 'app-layout/app-layout'
import ExamplesPage from 'app-layout/pages/examples-page'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  return (
    <AppLayout>
      <Router>
        <Routes>
          <Route path="/" element={<ExamplesPage />} />
        </Routes>
      </Router>
    </AppLayout>
  )
}

export default App
