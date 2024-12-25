import React from 'react';

const Button = ({ children, style }) => {
  return (
    <button style={{
      backgroundColor: '#A48472',
      borderRadius: '4px',
      padding: '1px 18px',
      fontSize: '16px',
      fontFamily: 'PingFang SC',
      fontWeight: '500',
      lineHeight: '19.6px',
      border: 'none',
      cursor: 'pointer',
      color: '#FFFFFF',
      ...style
    }}>
      {children}
    </button>
  );
};

export default Button;