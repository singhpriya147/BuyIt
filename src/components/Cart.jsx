import React, { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';

import { CartContext } from '../context/Context';
const Cart = () => {



   const {
     state: { cart },
     dispatchCart,
   } = useContext(CartContext);
  return (
    <div className='cart'>
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <>
          {cart.map((prod) => (
            <div className='cartitem' key={prod.id}>
              <img
                src={prod.images[0]}
                className='cartItemImg'
                alt={prod.title}
              />
              <div className='cartItemDetail'>
                <span>{prod.title}</span>
                <span>{prod.price}$</span>
              </div>
              <AiFillDelete
                fontSize='20px'
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  dispatchCart({
                    type: 'REMOVE_FROM_CART',
                    payload: prod,
                  })
                }
              />
            </div>
          ))}
        </>
      ) : (
        <span style={{ padding: 10 }}>Your Cart is Empty!</span>
      )}
    </div>
  );
}

export default Cart