import React, { useContext } from "react";
import { PizzaContext } from "../Context/PizzaContext";

const Carrito = () => {
  const { carrito, total, numeroPizzas, eliminarDelCarro, aumentarCantidad, reducirCantidad } = useContext(PizzaContext);

  return (
    <div>
      <h2>Carrito</h2>
      
      <ul>
        {Object.values(carrito).map((pizza, index) => (
          <li className="caja-principal-carrito" key={index}>
            <div className="caja-img-carrito">
              <img src={pizza.img} alt={pizza.name} />
            </div>
            {pizza.name} - ${pizza.price} x {pizza.cantidad}
            <button onClick={() => reducirCantidad(pizza.id)}>-</button>
            <button onClick={() => aumentarCantidad(pizza.id)}>+</button>
            <button id="boton-carrito" onClick={() => eliminarDelCarro(pizza.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h2>Numero de pizzas: {numeroPizzas}</h2>
      <h2>Total: ${total}</h2>
    </div>
  );
};

export default Carrito;
