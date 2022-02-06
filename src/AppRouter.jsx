import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Shoes from "./components/Shoes.component/Shoes";
import Pants from "./components/Pants.component/Pants";
import Shirts from "./components/Shirts.component/Shirts";
import Navbar from "./components/Navbar.component/Navbar";

const AppRouter=()=>{
    return(
        
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path="/Shoes" element={<Shoes/>} />
            <Route exact path="/Pants" element={<Pants/>}/>
            <Route exact path="/Shirts" element={<Shirts/>}/>
        </Routes>
        
        </BrowserRouter>
    )
}
export default AppRouter;