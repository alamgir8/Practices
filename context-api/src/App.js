
import { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';

export const categoryContext = createContext();
function App() {
  const [category, setCategory] = useState('Laptop');
  return (
    <categoryContext.Provider value={[category, setCategory]}>
       <Header />
       <Home />
       <Shipment/>       
    </categoryContext.Provider>
  );
}

export default App;
