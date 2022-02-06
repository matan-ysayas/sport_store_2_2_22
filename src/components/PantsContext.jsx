import { Children, createContext,useEffect,useState } from "react";
import { GetPantsData } from "../service/pants-service";

export const PantsContext=createContext();


const PantsContextProvider=({children})=>{

    const[array,setArray]=useState([]);

    useEffect(()=>{
        GetPantsData().then((res)=>setArray(res))
    },[])
return (<div>
<PantsContext.Provider value={{array,setArray}}>
    {children}
</PantsContext.Provider>
</div>)
}
export default PantsContextProvider;