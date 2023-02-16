import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from './components/GlobalStyles'
import GlobalProvider from './context/GlobalProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles>
      <GlobalProvider >
        <App />
      </GlobalProvider>
    </GlobalStyles>
  </React.StrictMode>,
)
