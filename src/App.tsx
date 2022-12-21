import { Routes, Route } from 'react-router-dom'
import Sidebar from './layout/Sidebar'
import { Dashboard } from './pages/Dashboard/Dashboard'

const Learn = () => {
  return <div>Hello Learn</div>
}
const Health = () => {
  return <div>Hello Health</div>
}
const Event = () => {
  return <div>Hello Event</div>
}
const Information = () => {
  return <div>Hello Information</div>
}
const Assesment = () => {
  return <div>Hello Assesment</div>
}
const Admins = () => {
  return <div>Hello Admin</div>
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
      <Route
        path='/learn'
        element={
          <Sidebar>
            <Learn />
          </Sidebar>
        }
      />
      <Route
        path='/health'
        element={
          <Sidebar>
            <Health />
          </Sidebar>
        }
      />
      <Route
        path='/events'
        element={
          <Sidebar>
            <Event />
          </Sidebar>
        }
      />
      <Route
        path='/information'
        element={
          <Sidebar>
            <Information />
          </Sidebar>
        }
      />
      <Route
        path='/assesment'
        element={
          <Sidebar>
            <Assesment />
          </Sidebar>
        }
      />
      <Route
        path='/admin'
        element={
          <Sidebar>
            <Admins />
          </Sidebar>
        }
      />
    </Routes>
  )
}

export default App
