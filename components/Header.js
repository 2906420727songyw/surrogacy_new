import React from 'react';

const Header = () => {
  return (
    <h1 style={{
      fontFamily: 'Playfair Display',
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: '30px',
      margin: 0,
      '@media (max-width: 768px)': {
        fontSize: '18px',
        lineHeight: '24px',
        marginBottom: '10px',
      }
    }}>
      Sapling Surrogacy
    </h1>
  );
};

export default Header;