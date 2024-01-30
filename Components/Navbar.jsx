
import { NavLink } from "react-router-dom";
import Burbuja from "./Burbuja";
import { useContext } from "react";
import { PizzaContext } from "../Context/PizzaContext";

export const Navbar = () => {
   
  const{rutaActiva} = useContext(PizzaContext);
  
    return (
    <div className="cajaNavBar">
        <h1>Pizería Mamma Mía</h1>
        <NavLink className={rutaActiva} to="/">Home</NavLink>
        <Burbuja />
    </div>
  )
}

export default Navbar;
