import React, { useState, useContext } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import Cart from './Cart';
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../Store/auth-context';
const NavBar = ({ cartItems, removeFromCart }) => {
  const [showCart, setShowCart] = useState(false);
  const location = useLocation();

  const authCtx= useContext(AuthContext)
  
  const isLoggedIn = authCtx.isLoggedIn;

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };


  const activeLinkStyle = {
    textDecoration: 'underline',
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="justify-content-center" >
        <Container>
          <Navbar.Brand as={Link} to="/">Your Cart</Navbar.Brand>
          <Nav className="mx-auto">

            <Nav.Link as={Link} to="/home" style={location.pathname === '/home' ? activeLinkStyle : {}}>Home</Nav.Link>
            
            <Nav.Link as={Link} to="/" style={location.pathname === '/' ? activeLinkStyle : {}}>Store</Nav.Link>
            
            <Nav.Link as={Link} to="/about" style={location.pathname === '/about' ? activeLinkStyle : {}}>About</Nav.Link>
            
            <Nav.Link as={Link} to="/login" style={location.pathname === '/login' ? activeLinkStyle : {}}>Log In</Nav.Link>
            
            <Nav.Link as={Link} to="/contact" style={location.pathname === '/contact' ? activeLinkStyle : {}}>Contact Us</Nav.Link>
            

          </Nav>
          <Button onClick={openCart}>
            Cart{' '}
            {cartItems.length > 0 && (
              <span className="badge badge-light ml-2">{cartItems.length}</span>
            )}
          </Button>
        </Container>
      </Navbar>

      <Cart
        showCart={showCart}
        closeCart={closeCart}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
    </>
  );
};

export default NavBar;
