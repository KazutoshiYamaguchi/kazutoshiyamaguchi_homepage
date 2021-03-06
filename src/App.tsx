import React from 'react';
import theme from './theme/theme';

import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Router } from './router/Router';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Router />
      </BrowserRouter>
    </ChakraProvider>

  )

}

export default App;
