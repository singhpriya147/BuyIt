import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { apiReducer } from '../reducer/apiReducer'

const initialState = {
  loading: true,
  product: null,
  error: null,
};

const ProductDetails = () => {
  const { id } = useParams();
  const [state, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
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

  const { loading, product, error } = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      {/* Render other product details as needed */}
    </div>
  );
};

export default ProductDetails;
