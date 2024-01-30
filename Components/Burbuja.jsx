import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { PizzaContext } from '../Context/PizzaContext';
import { NavLink } from 'react-router-dom';

export const Burbuja = () => {
    const { numeroPizzas, rutaActiva,total } = useContext(PizzaContext);
  
    return (
        <div className='caja-Burbuja'>
            <NavLink to="/Carrito" className={rutaActiva}>
                <FaShoppingCart />{` Las pizzas que llevas:  ${numeroPizzas}`}
                <div className='caja-total'>{`Total: $${total}`}</div>
            </NavLink>
        </div>
    )
}

export default Burbuja;