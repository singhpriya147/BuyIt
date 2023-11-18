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

console.log(state.products);
console.log(state.products.products);




    
  const filteredProducts =
    state.selectedCategory !== ''
      ? state.products.products.filter(
          (product) => product.category === state.selectedCategory
        )
      : state.products.products;
  return (
    <div className='home'>
      <div className='productContainer'>
        {filteredProducts
          ? filteredProducts.map((product) => {
              return <Product SingleProduct={product} key={product.id} />;
            })
          : state.products.map((product) => (
              <Product SingleProduct={product} key={product.id} />
            ))
            }
      </div>
      <Filter />
      <div></div>
    </div>
  );
}

export default Home