import React, { createContext, useState, useEffect,useContext, useReducer } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
//  import jsonData from  '../data/data.json'
 import jsonData from '../data/data.json';

import { cartReducer } from './reducer';

export const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'https://kohls.p.rapidapi.com/products/list',
//           {
//             headers: {
//               'X-RapidAPI-Host': 'kohls.p.rapidapi.com',
//               'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Replace with your actual RapidAPI key
//             },
//           }
//         );

//         // Assuming the API response contains an array of products with 'name' and 'price' properties
//         setProducts(response.data); // Update the 'products' state with the fetched data
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array to ensure the effect runs only once

//   return <CartContext.Provider value={{ products }}>{children}</CartContext.Provider>;
// };

// export const CartState = () => {
//   return useContext(Cart);
// };


export default function  ContextProvider({children}){

const [state,dispatch]=useReducer(cartReducer,{
  products:jsonData,
  cart:[]
})






  return (
    // <CartContext.Provider value={{ jsonData}}>{children}
    // </CartContext.Provider>
    <CartContext.Provider value={{state,dispatch}} >{children}</CartContext.Provider>
  );
}


