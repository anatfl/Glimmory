import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import App from './App'
import { MemoriesProvider } from './context/memoryContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MemoriesProvider>
      <App />
    </MemoriesProvider>
  </React.StrictMode>
)
