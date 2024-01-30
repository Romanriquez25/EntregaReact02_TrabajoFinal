import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { PizzaContext } from '../Context/PizzaContext';
import { useParams } from 'react-router-dom';

export const Pizza = () => {
    
    const {pizzas,agregarAlCarro} = useContext(PizzaContext);
    const {id} = useParams();
    const [elegirPizza, setelegirPizza] = useState(null);

    useEffect(() => {
        const pizza = pizzas.find(p => p.id === id);
        setelegirPizza(pizza);
    }, [id, pizzas]);
    

    return (
       <>
           {elegirPizza && (
               <div className='gallery2'>
                    <div className='pizza' key={elegirPizza.id}>
                        <img src={elegirPizza.img} alt={elegirPizza.name} />
                        <div className='pizza-info'>
                            <h3>{elegirPizza.name}</h3>
                            <h4>${elegirPizza.price}</h4>
                        </div>
                        <p>{elegirPizza.desc}</p>
                        <button onClick={() => agregarAlCarro(elegirPizza)}>Agregar Al Carro</button>
                    </div>
                </div>
           )}
       </>
    )
}
export default Pizza;