import 'bootstrap/dist/css/bootstrap.min.css'
import '@/app/fonts/fonts.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'

import { App } from '@/app/App'
import { store } from '@/app/store/store'
import { GlobalStyles } from '@/app/styles/GlobalStyles'

import { colorStone700 } from './shared/consts/colors'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <App />

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: '14px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'white',
            color: colorStone700,
          },
        }}
      />
    </Provider>
  </React.StrictMode>,
)
