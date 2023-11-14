import React,{useContext} from 'react'
import {Card} from "react-bootstrap"
import {Button} from 'react-bootstrap';
import './style.css';
import { CartContext } from '../context/Context';
import { Link } from 'react-router-dom';
import './style.css';

const Product = ({SingleProduct}) => {

// const {state:{cart},dispatch}=CartState()
  const { state:{cart},dispatch } = useContext(CartContext);

const id = SingleProduct.id;
console.log(cart);
  return (
    <Link to={`/${id}`}>
      <div className='products'>
        <Card>
          <Card.Img
            src={SingleProduct.images[0]}
            alt={SingleProduct.title}
            style={{ width: '200px', height: '200px' }}
          ></Card.Img>
          <Card.Title>{SingleProduct.title}</Card.Title>

          <Card.Subtitle>{SingleProduct.price}$</Card.Subtitle>
          <Card.Subtitle style={{backgroundColor:'red', display:"block"}}>{SingleProduct.discountPercentage}% OFF</Card.Subtitle>
          {cart.some((p) => p.id === SingleProduct.id) ? (
            <button
              onClick={() => {
                dispatch({
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
                dispatch({
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