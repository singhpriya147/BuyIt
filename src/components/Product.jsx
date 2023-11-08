import React,{useContext} from 'react'
import {Card} from "react-bootstrap"
import {Button} from 'react-bootstrap';
import './style.css';
import { CartContext } from '../context/Context';


import {CartState} from '../context/Context'
const Product = ({SingleProduct}) => {

// const {state:{cart},dispatch}=CartState()
  const { state:{cart},dispatch } = useContext(CartContext);


  return (
    <div className='products'>
      <Card>
        <Card.Img
          src={SingleProduct.image.url}
          alt={SingleProduct.productTitle}
        ></Card.Img>
        <Card.Title>{SingleProduct.productTitle}</Card.Title>
        <Card.Subtitle>
          {SingleProduct.prices.map((price, index) => (
            <div key={index}>
              <p>
                Regular Price: {price.regularPrice.minPrice}
                {price.regularPrice.maxPrice}$
              </p>
            </div>
          ))}
        </Card.Subtitle>

        {cart.some((p) => p.webID === SingleProduct.webID) ? (
          <Button variant='danger' onClick={()=>{dispatch({
           type:'REMOVE_FROM_CART',
           payload:SingleProduct,
          })}}>Remove from cart</Button>
        ) : (
          <Button onClick={()=>{dispatch({
            type: 'ADD_TO_CART',
            payload: SingleProduct,
          });}}>Add to cart</Button>
        )}
      </Card>
    </div>
  );
}

export default Product