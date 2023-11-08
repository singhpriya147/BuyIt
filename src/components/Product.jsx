import React from 'react'
import {Card} from "react-bootstrap"
import './style.css';
const Product = ({SingleProduct}) => {
  return (
    <div className='products'>
      <Card>
        <Card.Img
          src={SingleProduct.image.url}
          alt={SingleProduct.productTitle}
        ></Card.Img>
        {SingleProduct.productTitle}
      </Card>
    </div>
  );
}

export default Product