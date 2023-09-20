import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import Cart from './Cart';
import { Link } from 'react-router-dom';

//code for navbarclear

const NavBar = ({ cartItems, removeFromCart }) => {
  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  // Calculate the total quantity of items in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="justify-content-center">
        <Container>
          <Navbar.Brand href="#home">Your Cart</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link as ={Link} to ="/">Store</Nav.Link>
            <Nav.Link as={Link} to ="about">About</Nav.Link>
          </Nav>
          <Button onClick={openCart}>
            Cart{' '}
            {totalQuantity > 0 && (
              <span className="badge badge-light ml-2">{totalQuantity}</span>
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
