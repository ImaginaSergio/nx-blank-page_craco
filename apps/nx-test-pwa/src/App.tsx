import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import logo from './logo.svg';

import './App.css';
import ServiceWorkerController from './controllers/ServiceWorkerController';

function App() {
  React.useEffect(() => {
    console.log({ env: process.env.NODE_ENV });
  }, []);

  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>¡Hola mundo!</p>
        </header>
      </div>

      <ServiceWorkerController />
    </ChakraProvider>
  );
}

export default App;
