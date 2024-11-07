import {useState , useEffect} from 'react';
import HomePage from './HomePage';
import TimeLoadingScreen from './TimeLoadingScreen';
function App() {
  const [isLoading , setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000)

    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div>
      {isLoading ? <TimeLoadingScreen/> : <HomePage/>} 
    </div>
  );
}
export default App;