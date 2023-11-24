import React,{useContext} from 'react'
import Carousel from './Carousel'

import { CartContext } from '../context/Context'
import Product from './Product'

import './style.css';
 
const Home = () => {
  
  const { state,dispatchCart} = useContext(CartContext);
  
  if (state.products.length === 0) {
    return <div>Loading...</div>; 
  }

console.log(state.products); // object
console.log(state.products.products);// array 



 
const handleMaxPriceChange = (e) => {
  dispatchCart({
    type: 'SET_MAX_PRICE',
    payload: parseInt(e.target.value, 10),
  });
};
    console.log(state.selectedCategory);
  // const filteredProducts =
  //   state.selectedCategory !== ''  
  //     ? state.products.products.filter(
  //         (product) =>
  //           product.category ===
  //           state.selectedCategory
  //          && product.price <= state.maxPrice
  //       )
  //     : state.products.products;

  //     console.log(filteredProducts);
  const filteredProducts = state.products.products.filter((product) => {
    // Check for category filter
    const categoryFilter =
      state.selectedCategory === '' ||
      product.category === state.selectedCategory;

    // Check for price filter
    const priceFilter = product.price <= state.maxPrice;

    // Return true if both category and price filters pass
    return categoryFilter && priceFilter;
  });
  return (
    <div className='home'>
      <Carousel />
      <div className='product-container-header'>
        <h2>Explore Our Product</h2>
        <div className='price-range'>
          <h3>Filter by Price Range:</h3>

          <label htmlFor='maxPrice'>Max: ${state.maxPrice}</label>
          <input
            type='range'
            id='maxPrice'
            name='maxPrice'
            min='0'
            max='5000'
            step='10'
            value={state.maxPrice}
            onChange={handleMaxPriceChange}
           
          />
        </div>
      </div>
      <div id='productContainer'>
        {filteredProducts
          ? filteredProducts.map((product) => {
              return <Product SingleProduct={product} key={product.id} />;
            })
          : state.products.products.map((product) => (
              <Product SingleProduct={product} key={product.id} />
            ))}
      </div>
    
    </div>
  );
}

export default Home