import React, { createContext, useEffect, useReducer } from 'react';
import axios from 'axios'; 



import { cartReducer } from '../reducer/cartReducer';

export const CartContext = createContext();



export default function  ContextProvider({children}){

  
const [state, dispatchCart] = useReducer(cartReducer, {
  products: [],
  cart: [],
  selectedCategory: '',
maxPrice:'5000',
searchResults:[],

});
   useEffect (()=>{
    const fetchData=async()=>{
      try {
        const response = await axios.get(
          'https://dummyjson.com/products?skip=0&limit=100'
        );
 
        dispatchCart({
          type:'FETCH_PRODUCTS',
          payload:response.data
        });
      } catch (error) {
        console.log("error while fethcign data",error);
      }
    }

    fetchData();
   },[]);
   
   







  return (
   
    <CartContext.Provider value={{state,dispatchCart}} >{children}</CartContext.Provider>
  );
}


