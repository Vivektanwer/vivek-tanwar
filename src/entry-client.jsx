import './App.css'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router'
import { hydrateRoot } from 'react-dom/client'
import App from './App'

hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>,
)
