import react,{useContext,useState} from "react";
import { ShirtsContext } from "../ShirtsContext";

const Shirts =()=>{
    const {array,setArray}=useContext(ShirtsContext )
    return(<div>
        <h1>Shirts</h1>
       {array.map((item)=>
    <h2>{item.Model}</h2>
)}

    </div>)
}
export default Shirts;