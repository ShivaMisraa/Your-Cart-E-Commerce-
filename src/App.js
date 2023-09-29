import React, { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Store from "./Component/Store";
import NavBar from "./Component/NavBar";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import AboutPage from "./Pages/About";
import HomePage from "./Pages/HomePage";
import ContactUs from "./Pages/ContactUs";
// import ProductDetails from "./Product Details/ProductDetails";
import Login from "./Auth/Login";
import AuthContext from "./Store/auth-context";
import addToCartAPI, { getCartAPI } from "./Store/api";

// use this as laz
const ProductDetails = lazy(() => import("./Product Details/ProductDetails"));

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUniqueId, setUserUniqueId] = useState("");

  const loginHandler = (token, userEmail) => {
    console.log(userEmail);
    setIsLoggedIn(true);

    const userUniqueId = userEmail.replace(/[@.]/g, "");
    setUserUniqueId(userUniqueId);
    console.log(userUniqueId);

    localStorage.setItem("email", userUniqueId);
    localStorage.setItem("token", token);
  };

  const addToCart = async (item) => {
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

    try {
      console.log(userUniqueId);
      await addToCartAPI(userUniqueId, cartItems);
    } catch (error) {
      alert(error);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserEmail = localStorage.getItem("email");

    // console.log("useEffect is called!", storedToken, storedUserEmail);

    if (isLoggedIn && storedToken && storedUserEmail) {
      // Only fetch cart data if the user is logged in
      try {
        getCartAPI(storedUserEmail).then((cartData) => {
          setCartItems(cartData);
          // console.log(cartData);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [isLoggedIn]);

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

            <Route
              path="/products/:productId"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <ProductDetails />
                </Suspense>
              }
            />
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
