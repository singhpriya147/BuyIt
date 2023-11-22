import React, { useContext ,useState,useEffect} from 'react';

import { Badge, Button, Container, FormControl, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
import { CartContext } from '../context/Context';
import ThemeToggle from './ThemeToggle';
import img from '../assets/images/online-shopping.png'
import { CiSearch } from 'react-icons/ci';
import { CiShoppingCart } from 'react-icons/ci';
const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default category
  const [categories, setCategories] = useState([
    'All Catogories',
   'Smartphones',
'Laptops',
'Fragrances',
'Skincare',
'Groceries',
'Men-Shoes',
'Men-Shirts',
'Men-Watches',
'Home-decoration',
'Furniture',
'womens-dresses',
'womens-shoes',
'womens-watches',
'womens-bags',
'womens-jewellery',
  ]); // Add your categories here
  const {
    state: { cart },
    dispatchCart,
  } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
const handleCategoryChange = (category) => {
  setSearchTerm(''); // Clear search term when changing category
  setSelectedCategory(category);
  // You can fetch products based on the selected category here if needed
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
          {/* <img src={img} alt='logo' /> */}
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
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
         
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
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
      </div>
    </div>
  );
};

export default Header;
