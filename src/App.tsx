import { Routes, Route } from 'react-router-dom'
import Sidebar from './layout/Sidebar'
import { Dashboard } from './pages/Dashboard/Dashboard'

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Sidebar>
            <Dashboard />
          </Sidebar>
        }
      />
      <Route
        path='/dashboard'
        element={
          <Sidebar>
            <Dashboard />
          </Sidebar>
        }
      />
    </Routes>
  )
}

export default App
