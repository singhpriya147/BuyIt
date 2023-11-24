import React, { useContext ,useState,useEffect} from 'react';


import { Link } from 'react-router-dom';
import './style.css';
import { CartContext } from '../context/Context';
import ThemeToggle from './ThemeToggle';

import { CiSearch } from 'react-icons/ci';
import { CiShoppingCart } from 'react-icons/ci';

import { PiGithubLogoLight } from 'react-icons/pi';
const Header = () => {
 const [searchTerm, setSearchTerm] = useState('');


   const {
     state: { cart },
     dispatchCart,
    //  selectedCategory,
   } = useContext(CartContext);

  // console.log(selectedCategory);
  const categories = [
    { label: 'All Categories', value: '' },
    { label: 'Smartphones', value: 'smartphones' },
    { label: 'Laptops', value: 'laptops' },
    { label: 'Fragrances', value: 'fragrances' },
    { label: 'Skincare', value: 'skincare' },
    { label: 'Groceries', value: 'groceries' },
    { label: 'Mens-Shoes', value: 'mens-shoes' },
    { label: 'Mens-Shirts', value: 'mens-shirts' },
    { label: 'Mens-Watches', value: 'mens-watches' },
    { label: 'Home-decoration', value: 'home-decoration' },
    { label: 'Furniture', value: 'furniture' },
    { label: 'Womens-dresses', value: 'womens-dresses' },
    { label: 'Womens-shoes', value: 'womens-shoes' },
    { label: 'Womens-watches', value: 'womens-watches' },
    { label: 'Womens-jewellery', value: 'womens-jewellery' },
    

    

 
  ];
 



const handleCategoryChange = (category) => {

    const productContainerDiv = document.getElementById('productContainer');
    if (productContainerDiv) {
      productContainerDiv.scrollIntoView({ behavior: 'smooth' });
    }
  dispatchCart({ type: 'SET_SELECTED_CATEGORY', payload: category });
  console.log(category);
};
 
  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`
        );
        const data = await response.json();

        dispatchCart({ type: 'FETCH_SEARCH_RESULTS', payload: data.products });
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (searchTerm.trim() !== '') {
      fetchSearchResults();
    }
  }, [searchTerm, dispatchCart]);

   
   
  return (
    <div className='navbar'>
      <div className='navbar-brand'>
        <Link to='/'>
          <h3> BuyIt.</h3>
        </Link>
      </div>
      <div className='search'>
        <form action='' className='search-form'>
          <CiSearch className='search-icon' />
          <input
            type='search'
            placeholder='Search a product...'
            aria-label='Search'
            value={searchTerm}
            onchange={(e) => setSearchTerm(() => e.target.value)}
          />
        </form>
      </div>
      <div className='categories-dropdown'>
      
        <select
          id='category'
          // value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>
      <div className='theme-n-cart'>
        <ThemeToggle />
        <Link to='/Cart'>
          <CiShoppingCart
            color='black'
            style={{ 'font-size': '25px' }}
          ></CiShoppingCart>
          <span class='badge'>{cart.length}</span>
        </Link>
        <PiGithubLogoLight style={{ fontSize: '25px' }} />
      </div>
    </div>
  );
};

export default Header;
