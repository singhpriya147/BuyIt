import React,{useContext} from 'react'
import {Card} from "react-bootstrap"
// import {Button} from 'react-bootstrap';
import './style.css';
import { CartContext } from '../context/Context';
import { Link } from 'react-router-dom';
import './style.css';
import {stripHtml} from 'string-strip-html';
import PropTypes from 'prop-types';




const Product = ({product}) => {

   const { result } = stripHtml(product.description);
  // const { state:{cart},dispatchCart } = useContext(CartContext);

// const id = SingleProduct.id;
// console.log(cart);
  return (
    // <Link to={`/${id}`}>
    <>
      {/* <div className='products'>
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
    // </Link> */}

      <div className='product__card'>
        <img
          className='product__image'
          src={product.image?.url}
          alt={product.name}
        />
        <div className='product__info'>
          <h4 className='product__name'>{product.name}</h4>
          <p className='product__description'>
            {/* product description stripped of html tags */}
            {result}
          </p>
          <div className='product__details'>
            <p className='product__price'>
              {product.price.formatted_with_symbol}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

Product.propTypes = {
  product: PropTypes.object,
};
export default Product