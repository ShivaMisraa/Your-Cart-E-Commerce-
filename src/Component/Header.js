import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#808080', 
    color: '#FFFFFF', 
    textAlign: 'center',
    padding: '2rem',
    fontFamily: 'cursive',
    fontSize: "2.5rem"
  };




  return (
    <div>
      <header style={headerStyle}>
        The Generics
      </header>
    </div>
  )
}

export default Header;
