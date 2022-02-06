import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { GetData } from './service/shoes-service';
import Shoes from './components/Shoes.component/Shoes';
import ContextProvider from './components/ShoesContext';
import Pants from './components/Pants.component/Pants';
import PantsContextProvider from './components/PantsContext';
import Shirts from './components/Shirts.component/Shirts';
import ShirtsContextProvider from './components/ShirtsContext';
import Navbar from './components/Navbar.component/Navbar';
import AppRouter from './AppRouter';
function App() {
const [shoes,setShoes]=useState([]);

const GetShoes=()=>{

  GetData().then((data)=>setShoes(data))
}
  return (
    <div className="App">
      {/* <button onClick={GetShoes}>click</button>
      <h1>
        {shoes.map((item)=>
          <li>{item.ShoeType}</li>
        )}
      </h1>

      <ContextProvider>
        <Shoes/>
      </ContextProvider> */}

      {/* <PantsContextProvider>
        <Pants/>
      </PantsContextProvider>

      <ShirtsContextProvider>
        <Shirts/>
      </ShirtsContextProvider> */}
      {/* <AppRouter/> */}
      {/* <ShirtsContextProvider>
        <ContextProvider>
          <PantsContextProvider>
            <AppRouter></AppRouter>
          </PantsContextProvider>
        </ContextProvider>
      </ShirtsContextProvider> */}
  
<Shoes/>


    </div>
  );
}

export default App;
