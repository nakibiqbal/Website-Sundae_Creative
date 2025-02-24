import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from "./NAVBAR/Navbar.jsx"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App />
  </StrictMode>,
)
