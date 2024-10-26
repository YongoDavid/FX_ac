import { Provider } from "@/components/ui/provider"
// import { ChakraProvider } from '@chakra-ui/react'
import HomePage from './HomePage';
function App() {
  return (
    <Provider>
      <HomePage /> 
    </Provider>
  );
}
export default App;