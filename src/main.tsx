import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { registerServiceWorker, initializePWAPrompt } from './utils/pwa'

// Register service worker for PWA functionality
registerServiceWorker()

// Initialize PWA install prompt
initializePWAPrompt()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)