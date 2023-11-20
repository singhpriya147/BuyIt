import React,{useContext} from 'react'
// import Header from './Header'
// import jasonData from  '../data/data.json'
import { CartContext } from '../context/Context'
import Product from './Product'
import Filter from './Filter'
import './style.css';
 
const Home = () => {
  
  const {state}=useContext(CartContext)
  
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


    
  const filteredProducts =
    state.selectedCategory !== '' 
      ? state.products.products.filter(
          (product) => product.category === state.selectedCategory     && product.price <= state.maxPrice
        )
      : state.products.products.filter((product)=>
       
        
          product.price <= state.maxPrice
      ) ;

      console.log(filteredProducts);
  return (
    <div className='home'>
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