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
      </Card>
    </div>
  );
}

export default Product