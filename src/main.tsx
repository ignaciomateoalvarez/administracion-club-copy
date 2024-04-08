import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AuthStateProvider } from './hooks/useAuth/provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthStateProvider>
      <App />
    </AuthStateProvider>
  </React.StrictMode>,
)
