import React, { useContext ,useState,useEffect} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge, Button, Container, FormControl, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
import { CartContext } from '../context/Context';
import ThemeToggle from './ThemeToggle';
import img from '../assets/images/online-shopping.png'
import { CiSearch } from 'react-icons/ci';
const Header = () => {
 

  const {
    state: { cart },
    dispatchCart,
  } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
 

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
          <img src={img} alt='logo' />
          Swift Cart
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
      {/* <div className='navbar-nav-items'> */}
      <div className='theme-n-cart'>
        <ThemeToggle />
        <Link to='/Cart'>
          <button>
            <FaShoppingCart
              color='black'
              style={{ 'font-size': '25px' }}
            ></FaShoppingCart>
            <span class='badge'>{cart.length}</span>
          </button>
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Header;
