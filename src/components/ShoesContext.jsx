import { createContext,useEffect,useState } from "react";
import { GetData } from "../service/shoes-service";

export const ShoesContext=createContext();


let NameArray=[{},{},{}];

const ContextProvider=({children})=>{
   
    const[array,setArray]=useState(NameArray)
    const[isLoading,setIsLoading]=useState(false)

    useEffect(()=>{
        setIsLoading(true)
        GetData().then((res)=>setArray(res))
        .catch((err)=>console.log(err))
        .finally(()=>setIsLoading(false))
    },[])

return(
    <ShoesContext.Provider value={{array,setArray,isLoading}} >
{children}
    </ShoesContext.Provider>
)
}
export default ContextProvider;