import React,{useContext} from 'react'
import Carousel from './Carousel'
// import Header from './Header'
// import jasonData from  '../data/data.json'
import { CartContext } from '../context/Context'
import Product from './Product'
import Filter from './Filter'
import './style.css';
 
const Home = () => {
  
  const { state, dispatchCart } = useContext(CartContext);
  
  if (state.products.length === 0) {
    return <div>Loading...</div>; // Or a loading indicator while data is being fetched
  }

console.log(state.products); // object
console.log(state.products.products);// array 

// const filteredProducts = state.products.products.filter((product) => {
//   // Check if the product's category matches the selected category
//   const categoryMatch =
//     state.selectedCategory === '' ||
//     product.category === state.selectedCategory;

//   // Check if the product's price is within the selected price range
//   const priceInRange =
//     product.price >= state.minPrice && product.price <= state.maxPrice;

//   // Include the product in the filtered list if both conditions are met
//   return categoryMatch && priceInRange;
// });
 
const handleMaxPriceChange = (e) => {
  dispatchCart({
    type: 'SET_MAX_PRICE',
    payload: parseInt(e.target.value, 10),
  });
};
    
  const filteredProducts =
    state.selectedCategory !== '' 
      ? state.products.products.filter(
          (product) => product.category === state.selectedCategory     && product.price <= state.maxPrice
        )
      : state.products.products

      console.log(filteredProducts);
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
            max='1000'
            step='10'
            value={state.maxPrice}
            onChange={handleMaxPriceChange}
           
          />
        </div>
      </div>
      <div className='productContainer'>
        {filteredProducts
          ? filteredProducts.map((product) => {
              return <Product SingleProduct={product} key={product.id} />;
            })
          : state.products.products.map((product) => (
              <Product SingleProduct={product} key={product.id} />
            ))}
      </div>
      <Filter />
      <div></div>
    </div>
  );
}

export default Home