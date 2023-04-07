import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import {Store} from './store/store'
ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Provider store={Store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </Provider>
  </BrowserRouter>

)
