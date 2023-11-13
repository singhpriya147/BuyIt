import React, { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';

import { CartContext } from '../context/Context';
const Cart = () => {



   const {
     state: { cart },
     dispatch,
   } = useContext(CartContext);
  return (
    <div>
      {cart.length > 0 ? (
        <>
          {cart.map((prod) => (
            <span className='cartitem' key={prod.id}>
              <img
                src={prod.image}
                className='cartItemImg'
                alt={prod.title}
              />
              <div className='cartItemDetail'>
                <span>{prod.title}</span>
                <span>
                  {prod.price}
                </span>
              </div>
              <AiFillDelete
                fontSize='20px'
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: prod,
                  })
                }
              />
            </span>
          ))}
          
        </>
      ) : (
        <span style={{ padding: 10 }}>Cart is Empty!</span>
      )}
    </div>
  );
}

export default Cart