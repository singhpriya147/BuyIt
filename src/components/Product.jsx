import React,{useContext} from 'react'
import {Card} from "react-bootstrap"
// import {Button} from 'react-bootstrap';
import './style.css';
import { CartContext } from '../context/Context';
import { Link } from 'react-router-dom';
import './style.css';

const Product = ({SingleProduct}) => {

  const { state:{cart},dispatchCart } = useContext(CartContext);

const id = SingleProduct.id;
console.log(cart);
  return (
    <Link to={`/${id}`}>
      <div className='products'>
        <Card style={{ display: 'flex', flexDirection: 'column' }}>
          <Card.Img
            src={SingleProduct.images[0]}
            alt={SingleProduct.title}
            style={{ width: '200px', height: '200px' }}
          ></Card.Img>
          <Card.Title
            style={{
              fontSize: '1rem',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {SingleProduct.title}
            <Card.Subtitle
                      style={{backgroundColor:'orange',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            fontSize: '10px',
            color: 'black', // Text color
            fontWeight: 'bold', }}// Optional: Adjust font weight as needed}}
            >
              {SingleProduct.discountPercentage}%off
            </Card.Subtitle>
          </Card.Title>

          <Card.Subtitle style={{ fontWeight: 'lighter' }}>
            {SingleProduct.price}$
          </Card.Subtitle>

          {cart.some((p) => p.id === SingleProduct.id) ? (
            <button
              onClick={() => {
                dispatchCart({
                  type: 'REMOVE_FROM_CART',
                  payload: SingleProduct,
                });
              }}
            >
              Remove from cart
            </button>
          ) : (
            <button
              onClick={() => {
                dispatchCart({
                  type: 'ADD_TO_CART',
                  payload: SingleProduct,
                });
              }}
            >
              Add to cart
            </button>
          )}
        </Card>
      </div>
    </Link>
  );
}

export default Product