import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import BarcodeScanner from './BarcodeScanner'

ReactDOM.render(
  <React.StrictMode>
    <BarcodeScanner />
  </React.StrictMode>,
  document.getElementById('root'),
)
