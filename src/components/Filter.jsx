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
        <label className='larger-radio'>
          <input
            type='radio'
            value=''
            checked={state.selectedCategory === ''}
            onChange={() => handleCategoryChange('')}
          />
          All Categories
        </label>
        <label className='larger-radio'>
          <input
            type='radio'
            value='smartphones'
            checked={state.selectedCategory === 'smartphones'}
            onChange={() => handleCategoryChange('smartphones')}
          />
          smartphones
        </label>
        <label className='larger-radio'>
          <input
            type='radio'
            value='smartphones'
            checked={state.selectedCategory === 'smartphones'}
            onChange={() => handleCategoryChange('smartphones')}
          />
          laptops
        </label>
        <label className='larger-radio'>
          <input
            type='radio'
            value='fragrances'
            checked={state.selectedCategory === 'fragrances'}
            onChange={() => handleCategoryChange('fragrances')}
          />
          fragrances
        </label>
        <label className='larger-radio'>
          <input
            type='radio'
            value='skincare'
            checked={state.selectedCategory === 'skincare'}
            onChange={() => handleCategoryChange('skincare')}
          />
          skincare
        </label>
        <label className='larger-radio'>
          <input
            type='radio'
            value='skincare'
            checked={state.selectedCategory === 'skincare'}
            onChange={() => handleCategoryChange('skincare')}
          />
          skincare
        </label>
        <label className='larger-radio'>
          <input
            type='radio'
            value='mens-shoes'
            checked={state.selectedCategory === 'mens-shoes'}
            onChange={() => handleCategoryChange('mens-shoes')}
          />
          Men
        </label>
      </div>
    </div>
  );
};

export default Filter;
