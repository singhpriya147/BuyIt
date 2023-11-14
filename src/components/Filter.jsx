// Filter.js
import React, { useContext } from 'react';
import { CartContext } from '../context/Context';

const Filter = () => {
  const { state, dispatch } = useContext(CartContext);

  const handleCategoryChange = (selectedCategory) => {
    // Dispatch an action to update the selected category in the state
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: selectedCategory });
  };

  return (
    <div className='filter-container'>
      <label>Filter by Category:</label>
      <select
        value={state.selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        <option value=''>All Categories</option>
        <option value='electronics'>Electronics</option>
        <option value='jewelery'>Jewelry</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">women's Clothing</option>
      </select>
    </div>
  );
};

export default Filter;
