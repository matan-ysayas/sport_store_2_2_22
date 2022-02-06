import react, { useContext, useState } from "react";
import { ShoesContext } from "../ShoesContext";
import ContextProvider from "../ShoesContext";
import ShoeCard from "../ShoeCard/ShoeCard";
import ShoesCards from "../ShoesCards/ShoesCards";

const Shoes = () => {

  return (
    <div>
      <h1>Shoes</h1>
      <ContextProvider>
        <ShoesCards />
      </ContextProvider>
    </div>
  );
};
export default Shoes;
