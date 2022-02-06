import "./ShoesCards.css";
import React from "react";
import ShoeCard from "../ShoeCard/ShoeCard";
import { ShoesContext } from "../ShoesContext";
import { useContext } from "react";
import Loading from "../Loading/Loading";


function ShoesCards() {
  const{array,setArray,isLoading}=useContext(ShoesContext);
  return (
    <div className="shoes-cards">
      <h1>ShoesCards</h1>
      {isLoading?
      <Loading/>:
      array.map((item)=>
      <ShoeCard shoeItem={item}/>)
      }
    </div>
  );
};

export default ShoesCards;
