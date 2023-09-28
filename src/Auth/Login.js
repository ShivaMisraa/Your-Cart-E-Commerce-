import React, { useState, useRef, useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Store/auth-context";

const Login = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("https://businesspost.ng/wp-content/uploads/2021/11/Online-Shoppers.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "70vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const authCtx = useContext(AuthContext);

  const navitage = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBV8n6ScEIrEeEgejtLEfjQ9KErSJuqGh4";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBV8n6ScEIrEeEgejtLEfjQ9KErSJuqGh4";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data.idToken);
        authCtx.login(data.idToken, data.email);
        navitage("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div style={backgroundImageStyle}>
      <Container
        style={{
          backgroundColor: "rgba(248, 249, 250, 0.7)", 
          padding: "20px",
          borderRadius: "10px",
          backdropFilter: "blur(5px)",
          
        }}
      >
        <Form>
          <p
            className="mb-4"
            style={{
              color: "blue",
              textShadow: "0 0 10px rgba(0, 0, 255, 0.8)",
              fontWeight: 'bold',
            }}
          >
            Please Sign-in/ Sign-Up to access Store
          </p>
          <Form.Group controlId="email">
            <Form.Label>Email Id</Form.Label>
            <Form.Control
              type="email"
              required
              className="mb-3"
              ref={emailInputRef}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              required
              className="mb-3"
              ref={passwordInputRef}
            />
          </Form.Group>
          <Button
            onClick={submitHandler}
            style={{
              margin: "15px auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {isLogin ? " Login" : " Create Account"}
          </Button>
          <div
            onClick={switchAuthModeHandler}
            variant="primary"
            type="submit"
            style={{
              marginBottom: "15px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {isLogin ? "Create Account" : "Login with existing account"}
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
