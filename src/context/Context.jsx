import React, { createContext, useEffect, useReducer ,useState} from 'react';
import axios from 'axios'; 
// import Commerce from '../lib/commerce';
import Commerce from '@chec/commerce.js';
const commerce = new Commerce(
  'pk_test_550533fa3679d6f61f01dc60efecd42dd9ff46dbac5f6'
);

// import { cartReducer } from '../reducer/cartReducer';

export const CartContext = createContext();



export default function  ContextProvider({children}){

   const [products, setProducts] = useState([]);
// const [state, dispatchCart] = useReducer(cartReducer, {
//   products: [],
//   cart: [],
//   selectedCategory: '',


// maxprice:5000,
// });
  //  useEffect (()=>{
  //   const fetchData=async()=>{
  //     try {
        // const response = await axios.get(
        //   'https://dummyjson.com/products?skip=0&limit=100'
        // );
 
        // dispatchCart({
        //   type:'FETCH_PRODUCTS',
        //   payload:response.data
        // });
    //   } catch (error) {
    //     console.log("error while fethcign data",error);
    //   }
    // }

  //   fetchData();
  //  },[]);
   
   
commerce.products
  .list({
    query: 'bag',
  })
  .then((response) => response.data);



// const fetchProducts = () => {

// commerce.products.list().then((product) => console.log(product))
//     .catch((error) => {
//       console.log('There was an error fetching the products', error);
//     });
// };
// useEffect(() => {
//   fetchProducts();
// }, []);
  return (
    // <CartContext.Provider value={{ jsonData}}>{children}
    // </CartContext.Provider>
    <CartContext.Provider value={{products}} >{children}</CartContext.Provider>
  );
}


