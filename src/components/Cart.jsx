import React, { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { CartContext } from '../context/Context';
import './style.css';

const Cart = () => {
  const {
    state: { cart },
    dispatchCart,
  } = useContext(CartContext);

  const handleDecrease = (prod) => {
    dispatchCart({
      type: 'CHANGE_CART_QTY',
      payload: {
        id: prod.id,
        qty: Math.max(prod.qty - 1, 1), // Ensure qty doesn't go below 1
      },
    });
  };

  const handleIncrease = (prod) => {
    if (prod.qty < prod.stock) {
      dispatchCart({
        type: 'CHANGE_CART_QTY',
        payload: {
          id: prod.id,
          qty: prod.qty + 1,
        },
      });
    }
  };

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
              <div className='quantity-control'>
                <button onClick={() => handleDecrease(prod)}>-</button>
                <span className='qyt'>{prod.qty}</span>
                <button onClick={() => handleIncrease(prod)}>+</button>
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
};

export default Cart;
