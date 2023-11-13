import { FaShoppingCart } from 'react-icons/fa';
import React, { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  NavDropdown,
  Navbar,
} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';


import './style.css';
import { CartContext } from '../context/Context';





const Header = () => {


   const {
     state: { cart },dispatch
     
   } = useContext(CartContext);

  return (
    <Navbar
      bg='dark'
      variant='dark'
      style={{ height: 80, backgroundColor: 'red' }}
    >
      <Container>
        <Navbar.Brand>
          <Link to='/'>Shopping Cart</Link>
        </Navbar.Brand>
        {useLocation().pathname.split('/')[1] !== 'cart' && (
          <Navbar.Text className='search'>
            <FormControl
              style={{ minwidth: 500 }}
              type='search'
              placeholder='Search a product...'
              className='m-auto'
              aria-label='Search'
              // onChange={(e) => {
              //   productDispatch({
              //     type: 'FILTER_BY_SEARCH',
              //     payload: e.target.value,
              //   });
              // }}
            />
          </Navbar.Text>
        )}
        {/* <Nav>
          <Dropdown alignCenter>
            <Dropdown.Toggle variant='success'>
              <FaShoppingCart color='white' fontSize='25px' />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>


            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                    {cart.map((prod) => (
                    <span className='cartitem' key={prod.webID}>
                      <img
                        src={prod.image.url}
                        className='cartItemImg'
                        alt={prod.name}
                      />
                      <div className='cartItemDetail'>
                        <span>{prod.productTitle}</span>
                        <span>
                          {prod.prices.map((price, index) => (
                            <div key={index}>
                              <p>
                                Regular Price: {price.regularPrice.minPrice}
                                {price.regularPrice.maxPrice.split}$
                              </p>
                            </div>
                          ))}
                        </span>
                      </div>
                      <AiFillDelete
                        fontSize='20px'
                        style={{ cursor: 'pointer' }}
                        onClick={() =>
                          dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to='/cart'>
                    <Button style={{ width: '95%', margin: '0 10px' }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>


          </Dropdown>
        </Nav> */}
        <Link to='/Cart'>
          <Button>
            <FaShoppingCart color='black' fontSize='25px' />
            <Badge>{cart.length}</Badge>
          </Button>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
