import { GetShirtsData } from "../service/shirts-service";
import { createContext,useEffect,useState } from "react";

export const ShirtsContext=createContext();



const ShirtsContextProvider=({children})=>{
    const[array,setArray]=useState([]);

    useEffect(()=>{
       GetShirtsData().then((res)=>setArray(res))
    },[])
    return(<div>

        <ShirtsContext.Provider value={{array,setArray}}>
            {children}
        </ShirtsContext.Provider>
    </div>)
}
export default ShirtsContextProvider;