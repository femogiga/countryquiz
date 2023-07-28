import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CountryProvider from './context/CountryContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountryProvider>
      <App />
    </CountryProvider>
  </React.StrictMode>,
)
