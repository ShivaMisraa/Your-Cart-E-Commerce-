import React from "react";
import "./AboutUs.css";
import { Container } from "react-bootstrap";

const AboutUsPage = () => {
  const backgroundImage = {
    backgroundImage: `url('https://img.freepik.com/premium-photo/simple-background-image-inviting-empty-workplace-featuring-white-desk-succulent_176841-12801.jpg?w=1380')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

  return (
    <div className="container" style={backgroundImage}>
      
        
         
          <div className="right-content">
            <Container className="about-container">
              <p className="larger-text">
                Welcome to Your Cart,your one-stop destination for all your
                shopping needs. We are more than just an online store; we are a
                reflection of your style, your interests, and your lifestyle. At
                 Your Cart, we understand that shopping is not just a
                transaction; it's an experience.  Our dedicated team ensures that
                every item we offer meets the highest standards of excellence.
                We believe that shopping should be convenient, reliable, and
                fun. Our user-friendly website, secure payment options, and
                efficient delivery services make your shopping experience
                effortless. We value your trust and strive to exceed your
                expectations every time you shop with us. Thank you for choosing
                Your Cart as your shopping destination. We look forward to being
                a part of your shopping journey and providing you with a
                delightful and memorable experience. Explore our wide range of
                products, and let us be your trusted companion in the world of
                online shopping.
              </p>
            </Container>
          </div>
       
      
    </div>
  );
};

export default AboutUsPage;
