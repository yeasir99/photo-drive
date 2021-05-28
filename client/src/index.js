import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import './App.css'
import App from './App'

import AppProvider from './context/index'

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root'),
)
