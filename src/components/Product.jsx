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
        <Card style={{ display: 'flex', flexDirection: 'column',gap:'3px' }}>
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
              margin: '1.5rem,',
           
            }}
          >
            {SingleProduct.title}
            <Card.Subtitle
              style={{
                backgroundColor: 'orange',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                fontSize: '10px',
                color: 'black', // Text color
                fontWeight: 'bold',
                padding: '1.2rem',
              }} // Optional: Adjust font weight as needed}}
            >
              <span>{SingleProduct.discountPercentage}</span>
              <span>%off</span>
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