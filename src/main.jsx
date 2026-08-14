import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import App from './App.jsx'

// Seleciona a <div id='root'> do index.html e injeta o App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)