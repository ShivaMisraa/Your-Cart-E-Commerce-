import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Import BrowserRouter and Route
import Store from "./Component/Store";
import NavBar from "./Component/NavBar";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import AboutPage from "./Pages/About";
import HomePage from "./Pages/HomePage";
import ContactUs from "./Pages/ContactUs";
import ProductDetails from "./Product Details/ProductDetails";
import Login from "./Auth/Login";
import AuthContext from "./Store/auth-context";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (token) => {
    setIsLoggedIn(true);
  };

  // Function to add an item to the cart
  const addToCart = (item) => {
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.title === item.title
    );

    if (itemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[itemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <div>
        <AuthContext.Provider
          value={{
            isLoggedIn: isLoggedIn,
            login: loginHandler,
          }}
        >
          <NavBar cartItems={cartItems} removeFromCart={removeFromCart} />
          <Header />

          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route path="/products/:productId" element={<ProductDetails />} />

            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <Store addToCart={addToCart} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
          </Routes>

          <Footer />
        </AuthContext.Provider>
      </div>
    </Router>
  );
}

export default App;
