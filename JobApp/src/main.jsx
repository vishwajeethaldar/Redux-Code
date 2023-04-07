import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import {ChakraProvider} from '@chakra-ui/react'
import { Provider } from 'react-redux'
import srore from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <ChakraProvider>
    <Provider store={srore}>
    <App />
    </Provider>
   </ChakraProvider>
  </BrowserRouter>

)
