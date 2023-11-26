import React, { useContext ,useState} from 'react';

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
    
   } = useContext(CartContext);

    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`
        );
        const data = await response.json();
        console.log(data);
        dispatchCart({ type: 'FETCH_SEARCH_RESULTS', payload: data.products });
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

 
 const handleSearchButtonClick = () => {

    fetchSearchResults();
     const productContainerDiv = document.getElementById('productContainer');
     if (productContainerDiv) {
       productContainerDiv.scrollIntoView({ behavior: 'smooth' });
     }
  };
   
  return (
    <div className='navbar'>
      <div className='navbar-brand'>
        <Link to='/'>
          <h3> BuyIt.</h3>
        </Link>
      </div>
      <div className='search'>
        <form action='' className='search-form'>
          <input
            type='search'
            placeholder='Search a product...'
            aria-label='Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(() => e.target.value)}
          />
        </form>
        <CiSearch onClick={handleSearchButtonClick} />
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
