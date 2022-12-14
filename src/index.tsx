import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'
import { BrowserRouter as Router } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
)
