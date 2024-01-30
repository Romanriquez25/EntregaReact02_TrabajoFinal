import { createContext, useContext, useState } from "react";
import data from '../public/pizzas.json';


export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas] = useState(data);
  const [carrito, setCarrito] = useState({});
  const [total, setTotal] = useState(0);
  const [numeroPizzas, setNumeroPizzas] = useState(0);

  const rutaActiva = ({ isActive }) => (isActive ? "rutaActiva" : "rutaInactiva");

  const eliminarDelCarro = (pizzaId) => {
    setCarrito((prevCarrito) => {
      const pizza = prevCarrito[pizzaId];
      if (pizza) {
        setTotal((prevTotal) => Math.max(0, prevTotal - pizza.price * pizza.cantidad));
        setNumeroPizzas((prevNumeroPizzas) => Math.max(0, prevNumeroPizzas - pizza.cantidad));
        delete prevCarrito[pizzaId];
      }
      return { ...prevCarrito };
    });
  };

  const agregarAlCarro = (pizza) => {
    setCarrito(prevCarrito => {
      if (prevCarrito[pizza.id]) {
        return {
          ...prevCarrito,
          [pizza.id]: {
            ...prevCarrito[pizza.id],
            cantidad: prevCarrito[pizza.id].cantidad + 1
          }
        };
      } else {
        return {
          ...prevCarrito,
          [pizza.id]: {
            ...pizza,
            cantidad: 1
          }
        };
      }
    });
    setTotal(prevTotal => prevTotal + pizza.price);
    setNumeroPizzas(prevNumeroPizzas => prevNumeroPizzas + 1);
  };

  const aumentarCantidad = (pizzaId) => {
    setCarrito((prevCarrito) => {
      const newCarrito = { ...prevCarrito };
      if (newCarrito[pizzaId]) {
        newCarrito[pizzaId].cantidad += 1;
        setTotal((prevTotal) => prevTotal + newCarrito[pizzaId].price);
        setNumeroPizzas((prevNumeroPizzas) => prevNumeroPizzas + 1);
      }
      return newCarrito;
    });
  };

  const reducirCantidad = (pizzaId) => {
    setCarrito((prevCarrito) => {
      const newCarrito = { ...prevCarrito };
      if (newCarrito[pizzaId] && newCarrito[pizzaId].cantidad > 1) {
        newCarrito[pizzaId].cantidad -= 1;
        setTotal((prevTotal) => Math.max(0, prevTotal - newCarrito[pizzaId].price));
        setNumeroPizzas((prevNumeroPizzas) => Math.max(0, prevNumeroPizzas - 1));
      }
      return newCarrito;
    });
  };

  

  const titulo = "hola";

  return (
    <PizzaContext.Provider value={{ pizzas, titulo, carrito, setCarrito, total, setTotal, 
    numeroPizzas, setNumeroPizzas, rutaActiva, eliminarDelCarro,agregarAlCarro,aumentarCantidad,reducirCantidad }}>
      {children}
    </PizzaContext.Provider>
  );
};
