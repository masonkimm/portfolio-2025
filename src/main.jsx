import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import App from './App.jsx'
import './App.css'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: '#ffffff',
          colorTextBase: '#111111',
        },
      }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
