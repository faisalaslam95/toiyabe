import { Routes, Route } from 'react-router-dom'
import Sidebar from './layout/Sidebar'

const Dashboard = () => {
  return <div>Hello DashBoard</div>
}

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
