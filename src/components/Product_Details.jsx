import React, { useEffect, useReducer,useContext } from 'react';
import { useParams } from 'react-router-dom';
import { apiReducer } from '../reducer/apiReducer'
import { Card } from 'react-bootstrap';
import { CartContext } from '../context/Context';
import './style.css';

const initialState = {
  loading: true,
  product: null,
  error: null,
};

const ProductDetails = () => {
  const { id } = useParams();
  const [state, dispatch] = useReducer(apiReducer, initialState);
  const {
    state: { cart },dispatchCart
   
  } = useContext(CartContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        console.log(data);
        dispatch({ type: 'FETCH_SINGLE_PRODUCTS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
        console.log("error");
      }
    };

    fetchData();
  }, [id]);

  const { loading, product, error} = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='product-detail'>
      <Card>
        <Card.Img
          src={product.thumbnail}
          alt={product.title}
          style={{ width: '200px', height: '200px' }}
        />
        <h3>{product.price}$</h3>
        <Card.Title>{product.title}</Card.Title>
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
            color: 'black',
            fontWeight: 'bold',
            padding: '1.2rem',
          }}
        >
          <span>{product.discountPercentage}</span>
          <span>%off</span>
        </Card.Subtitle>
        <Card.Subtitle>{product.description}</Card.Subtitle>
        <Card.Subtitle>Rating: {product.rating}</Card.Subtitle>
        {cart.some((p) => p.id === product.id) ? (
          <button
            className='products Button'
            onClick={() => {
              dispatchCart({
                type: 'REMOVE_FROM_CART',
                payload: product,
              });
            }}
          >
            Remove from cart
          </button>
        ) : (
          <button
            className='products Button'
            onClick={() => {
              dispatchCart({
                type: 'ADD_TO_CART',
                payload: product,
              });
            }}
          >
            Add to cart
          </button>
        )}
      </Card>
    </div>
  );
};

export default ProductDetails;
