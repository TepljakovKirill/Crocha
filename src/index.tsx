import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App.tsx'

import { store } from './redux/slices/store.tsx'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
