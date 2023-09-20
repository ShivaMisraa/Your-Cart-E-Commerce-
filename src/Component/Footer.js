import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#ADD8E6',
    textAlign: 'center',
    padding: '2rem',
    fontFamily: 'cursive',
    fontSize: '2.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const logoStyle = {
    width: '40px',
    height: '40px',
    marginRight: '10px'
  };

  return (
    <div>
      <footer style={footerStyle}>
      <p style={{ flex: 1, textAlign: 'center' }}>The Generics</p>
        <div>
          <img
            src="https://logowik.com/content/uploads/images/674_spotify1.jpg"
            alt="Spotify Logo"
            style={logoStyle}
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/018/930/572/original/youtube-logo-youtube-icon-transparent-free-png.png"
            alt="YouTube Logo"
            style={logoStyle}
          />
          <img
            src="https://brandpalettes.com/wp-content/uploads/2018/05/Facebook-Logo-300x300.png"
            alt="Facebook Logo"
            style={logoStyle}
          />
        </div>
       
        
      </footer>
    </div>
  );
};

export default Footer;
