import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token") || ""; // Get token from localStorage or set to empty string if not found

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token; // !! this will change this in boolean value like truthy or falsy value

  

  const logInHandler = (token) => {
    
    setToken(token);
    localStorage.setItem("token", token);
    console.log("Token stored in localStorage:", token);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: logInHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
