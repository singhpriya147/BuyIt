import React, { useContext,useState,useEffect } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { CartContext } from '../context/Context';
import './style.css';

const Cart = () => {
  const {
    state: { cart },
    dispatchCart,
  } = useContext(CartContext);
const [total, setTotal] = useState();

useEffect(() => {
  setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
}, [cart]);
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
      <div className='cart-main'>
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
          <h3 style={{ padding: 10 }}>Your Cart is Empty!</h3>
        )}
      </div>

      <div className='checkout'>
        <span className='title'> Added {cart.length} items to cart</span>
       
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <button  disabled={cart.length === 0}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
  
};

export default Cart;
