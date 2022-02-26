import AppLayout from 'app-layout/app-layout'
import ExamplesPage from 'app-layout/pages/examples-page'
import Buttons from 'components/buttons'
import { NavLink } from 'react-router-dom'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  return (
    <AppLayout>
      <Router>
        <AppLayout.SideMenu>
          <NavLink to="/button">Button</NavLink>
        </AppLayout.SideMenu>
        <Routes>
          <Route path="/" element={<ExamplesPage />} />
          <Route path="/button" element={<Buttons />} />
        </Routes>
      </Router>
    </AppLayout>
  )
}

export default App
