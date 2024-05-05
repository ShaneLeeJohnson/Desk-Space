import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
// import {BrowserRouter as Router} from 'react-router-dom';

// Import Chakra
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// Create Apollo Client Instance
const client = new ApolloClient ({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache (),
});

const colors = {
  brand: {
    900: '#000000', // black
    800: '#4A5568', // dark gray
    700: '#FEEBC8', // light orange
    600: '#FFFFFF' // white
  }
}

const theme = extendTheme({ colors })
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>,
)