import React,{useContext} from 'react'
import Carousel from './Carousel'
import Categories from './Categories'
import { CartContext } from '../context/Context'
import Product from './Product'

import './style.css';
 
const Home = () => {
  
  const {
    state,
    dispatchCart,
  } = useContext(CartContext);
  console.log(state.searchResults);
  
    if (!state.products.products || state.products.products.length === 0) {
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

   

    const filteredProducts =
    state.selectedCategory !== ''
      ? state.products.products.filter(
          (product) =>
            product.category === state.selectedCategory &&
            (state.maxPrice === 5000 || product.price <= state.maxPrice)
        )
      : state.products.products;

  

    

  

  console.log(filteredProducts); //100
  console.log(state.searchResults);   
    return (
      <div className='home'>
        <Categories />
        <Carousel />
        <div className='product-container-header'>
          <h2>Explore Our Product</h2>
          <div className='price-range'>
            <div className='price-range-tooltip'>
              Please first select categories then set price Range
            </div>
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
          {(state.searchResults.length > 0
            ? state.searchResults
            : filteredProducts
          ).map((product) => (
            <Product SingleProduct={product} key={product.id} />
          ))}
        </div>
      </div>
    );
}

export default Home