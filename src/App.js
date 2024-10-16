import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <HomePage />
      </ChakraProvider>
    </div>
   
  );
}

export default App;
