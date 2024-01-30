// Home.js
import React, { useContext, useEffect } from "react";
import { PizzaContext } from "../Context/PizzaContext";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const Home = () => {
  const { pizzas, carrito, agregarAlCarro } = useContext(PizzaContext);
  const navigate = useNavigate();

  const mayusculas = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };






  useEffect(() => {
    console.log(carrito);
  }, [carrito]);

  return (
    <>
      <div className="gallery">
        {pizzas.map((p) => {
          const { id, name, img, price, ingredients, desc } = p;
          return (
            <div className="pizza" key={id}>
              <NavLink to={`/Pizza/${id}`}>
                <img src={img} alt={name} />
              </NavLink>
              <div className="pizza-info">
                <h3>{mayusculas(name)}</h3>
                <h4>${price}</h4>
                <h4>Ingredientes:</h4>
                {ingredients.map((ingredient, index) => (
                  <p key={index}>{mayusculas(ingredient)}</p>
                ))}
                <button onClick={() => agregarAlCarro(p)}>Agregar Al Carro</button>

              </div>
            </div>
          );
        })}
      </div>

    </>
  );
};

export default Home;
