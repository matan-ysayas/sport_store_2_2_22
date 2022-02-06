import react,{useContext,useState}  from "react";
import { PantsContext } from "../PantsContext";

const Pants=()=>{
    const{array,setArray}=useContext(PantsContext);
    return(
        <div>
            <h1>Pants</h1>
            <h1>{array.map((item)=>
    <li>{item.Id}</li>
)}</h1>
        </div>
    )
}
export default Pants;