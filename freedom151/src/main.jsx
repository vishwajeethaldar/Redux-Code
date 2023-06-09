import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
 
   <ChakraProvider>
    <BrowserRouter>
    <Provider store={store}>
      <App />
   </Provider>
   </BrowserRouter>
   </ChakraProvider>

)
