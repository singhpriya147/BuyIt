import React, { createContext, useState, useEffect,useContext, useReducer } from 'react';
import axios from 'axios'; 



import { cartReducer } from '../reducer/cartReducer';

export const CartContext = createContext();



export default function  ContextProvider({children}){

  
const [state, dispatch] = useReducer(cartReducer, {
  
  products: [],
  cart: [],
  selectedCategory:'',
});
   useEffect (()=>{
    const fetchData=async()=>{
      try {
        const response = await axios.get('https://dummyjson.com/products');
 
        dispatch({
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
    // <CartContext.Provider value={{ jsonData}}>{children}
    // </CartContext.Provider>
    <CartContext.Provider value={{state,dispatch}} >{children}</CartContext.Provider>
  );
}


