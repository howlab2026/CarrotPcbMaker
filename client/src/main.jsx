import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initMockApi } from './mockApi.js'

// Initialize client-side fallback/mock API for static deployment (GitHub Pages)
initMockApi();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

