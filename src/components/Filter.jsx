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
      <h3>Filter by Category:</h3>
      <div className='category-options'>
        <label>
          <input
            type='radio'
            value=''
            checked={state.selectedCategory === ''}
            onChange={() => handleCategoryChange('')}
          />
          All Categories
        </label>
        <label>
          <input
            type='radio'
            value='smartphones'
            checked={state.selectedCategory === 'smartphones'}
            onChange={() => handleCategoryChange('smartphones')}
          />
          smartphones
        </label>
        <label>
          <input
            type='radio'
            value='laptops'
            checked={state.selectedCategory === 'laptops'}
            onChange={() => handleCategoryChange('laptops')}
          />
          laptops
        </label>
        <label>
          <input
            type='radio'
            value='fragrances'
            checked={state.selectedCategory === 'fragrances'}
            onChange={() => handleCategoryChange('fragrances')}
          />
          fragrances
        </label>
        <label>
          <input
            type='radio'
            value='skincare'
            checked={state.selectedCategory === 'skincare'}
            onChange={() => handleCategoryChange('skincare')}
          />
          skincare
        </label>
        <label>
          <input
            type='radio'
            value='skincare'
            checked={state.selectedCategory === 'skincare'}
            onChange={() => handleCategoryChange('skincare')}
          />
          skincare
        </label>
      </div>
    </div>
  );
};

export default Filter;
