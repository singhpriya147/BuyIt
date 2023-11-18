import React, { useContext ,useState,useEffect} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge, Button, Container, FormControl, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './style.css';
import { CartContext } from '../context/Context';

const Header = () => {
 

  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
 

  useEffect(() => {
    const fetchSearchResults = async () => {
    
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`
        );
        const data = await response.json();

       
        dispatch({ type: 'FETCH_SEARCH_RESULTS', payload: data.products });
      } catch (error) {
        console.error('Error fetching search results:', error);
      } 
    };

    if (searchTerm.trim() !== '') {
      fetchSearchResults();
    }
  }, [searchTerm, dispatch]);
  return (
    <Navbar
      bg='dark'
      variant='dark'
      expand='lg'
      style={{ backgroundColor: 'var(--secondary)', maxheight: '50px' }}
    >
      <Container>
        <Navbar.Collapse
          id='responsive-navbar-nav'
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Navbar.Brand
            style={{
              marginRight: '15px',
              fontSize: 'xxx-large',
              fontWeight: '700',
            }}
          >
            <Link to='/'>🛍️Swift Cart</Link>
          </Navbar.Brand>

          <Link to='/Cart'>
            <Button>
              <FaShoppingCart color='black' fontSize='25px' />
              <Badge>{cart.length}</Badge>
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
      <Container>
        <Navbar.Collapse
          id='responsive-navbar-nav'
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            paddingBottom: '1rem',
          }}
        >
          {/* {useLocation().pathname.split('/')[1] !== 'cart' && (
            <FormControl
              style={{
                width: '100%',
                maxWidth: '500px',
                height: '40px',
                marginRight: '15px',
                padding: '5px',
              }}
              type='search'
              placeholder='Search a product...'
              // className='m-auto'
              aria-label='Search'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              //  onBlur={handleSearch} 
            />
          )} */}
          <FormControl
            style={{
              width: '100%',
              maxWidth: '500px',
              height: '40px',
              marginRight: '15px',
              padding: '5px',
            }}
            type='search'
            placeholder='Search a product...'
            // className='m-auto'
            aria-label='Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            //  onBlur={handleSearch}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
