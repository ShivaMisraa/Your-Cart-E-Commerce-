import "./AboutUs.css";
import React from "react";

const AboutPage = () => {
  return (
    <div className="container">
      <div className="about">
        <div className="about-content">
          <div className="left-content">
            <img
              className="about-image neon-blue smaller-image"
              src="https://www.pngmart.com/files/About-Us-PNG-Photos.png"
              alt="About Us"
            />
          </div>
          <div className="right-content">
            <p className="larger-text">
              In a world filled with boundless wonders and infinite
              possibilities, humanity strives for knowledge, seeking enlightenment
              through science, philosophy, and art, while grappling with complex
              questions about existence, purpose, and morality. Our collective
              journey spans millennia, marked by remarkable achievements in
              technology, medicine, and exploration, but also marred by wars,
              injustices, and environmental crises.
            </p>
          </div>
        </div>
        <div className="about-content">
          <div className="left-content">
            <img
              className="about-image neon-blue smaller-image"
              src="https://t3.ftcdn.net/jpg/05/06/32/62/360_F_506326245_2GtSGEjKLDtpHS0FSkEBs4gV34DmTtS5.jpg"
              alt="Another Image"
            />
          </div>
          <div className="right-content">
            <p className="larger-text">
              Despite these challenges, the human spirit perseveres, nurturing
              compassion, empathy, and resilience, fostering connections across
              cultures and continents, and forging a path towards a more equitable
              and sustainable future, where every individual can experience love,
              peace, and fulfillment, in harmony with the planet and each other.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
