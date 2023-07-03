import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { UseContextTotalProvider } from './context/UseContextTotal.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UseContextTotalProvider>
        <App />
      </UseContextTotalProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
