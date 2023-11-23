// Filter.js
import React, { useContext} from 'react';
import { CartContext } from '../context/Context';

const Filter = () => {
  const { state, dispatchCart } = useContext(CartContext);

  const handleCategoryChange = (selectedCategory) => {
    // Dispatch an action to update the selected category in the state
    dispatchCart({ type: 'SET_SELECTED_CATEGORY', payload: selectedCategory });
  };


  const handleMaxPriceChange = (e) => {
    dispatchCart({
      type: 'SET_MAX_PRICE',
      payload: parseInt(e.target.value, 10),
    });
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
          Smartphones
        </label>
        <label className='larger-radio'>
          <input
            type='radio'
            value='laptops'
            checked={state.selectedCategory === 'laptops'}
            onChange={() => handleCategoryChange('laptops')}
          />
          Laptops
        </label>
        <label className='larger-radio'>
          <input
            type='radio'
            value='fragrances'
            checked={state.selectedCategory === 'fragrances'}
            onChange={() => handleCategoryChange('fragrances')}
          />
          Fragrances
        </label>
        <label className='larger-radio'>
          <input
            type='radio'
            value='skincare'
            checked={state.selectedCategory === 'skincare'}
            onChange={() => handleCategoryChange('skincare')}
          />
          Skincare
        </label>
        <label className='larger-radio'>
          <input
            type='radio'
            value='groceries'
            checked={state.selectedCategory === 'groceries'}
            onChange={() => handleCategoryChange('groceries')}
          />
          Groceries
        </label>
        <label className='larger-radio'>
          <input
            type='radio'
            value='mens-shoes'
            checked={state.selectedCategory === 'mens-shoes'}
            onChange={() => handleCategoryChange('mens-shoes')}
          />
          Men-Shoes
        </label>
        <label className='larger-radio'>
          <input
            type='radio'
            value='mens-shirts'
            checked={state.selectedCategory === 'mens-shirts'}
            onChange={() => handleCategoryChange('mens-shirts')}
          />
          Men-Shirts
        </label>
        <label className='larger-radio'>
          <input
            type='radio'
            value='mens-watches'
            checked={state.selectedCategory === 'mens-watches'}
            onChange={() => handleCategoryChange('mens-watches')}
          />
          Men-Watches
        </label>
        <label className='larger-radio'>
          <input
            type='radio'
            value='home-decoration'
            checked={state.selectedCategory === 'home-decoration'}
            onChange={() => handleCategoryChange('home-decoration')}
          />
          Home-decoration
        </label>
        <label className='larger-radio'>
          <input
            type='radio'
            value='furniture'
            checked={state.selectedCategory === 'furniture'}
            onChange={() => handleCategoryChange('furniture')}
          />
          Furniture
        </label>
        <label className='larger-radio'>
          <input
            type='radio'
            value='womens-dresses'
            checked={state.selectedCategory === 'womens-dresses'}
            onChange={() => handleCategoryChange('womens-dresses')}
          />
          womens-dresses
        </label>
        <label className='larger-radio'>
          <input
            type='radio'
            value='womens-shoes'
            checked={state.selectedCategory === 'womens-shoes'}
            onChange={() => handleCategoryChange('womens-shoes')}
          />
          womens-shoes
        </label>
        <label className='larger-radio'>
          <input
            type='radio'
            value='womens-watches'
            checked={state.selectedCategory === 'womens-watches'}
            onChange={() => handleCategoryChange('womens-watches')}
          />
          womens-watches
        </label>
        <label className='larger-radio'>
          <input
            type='radio'
            value='womens-bags'
            checked={state.selectedCategory === 'womens-bags'}
            onChange={() => handleCategoryChange('womens-bags')}
          />
          womens-bags
        </label>
        <label className='larger-radio'>
          <input
            type='radio'
            value='womens-jewellery'
            checked={state.selectedCategory === 'womens-jewellery'}
            onChange={() => handleCategoryChange('womens-jewellery')}
          />
          womens-jewellery
        </label>
      </div>
     
      {/* <div className='price-range'>
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
       
      </div> */}
    </div>
  );
};

export default Filter;
