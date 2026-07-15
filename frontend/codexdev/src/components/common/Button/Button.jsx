// src/components/common/Button/Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', onClick, ...props }) => {
  // variant can be 'primary' (filled) or 'secondary' (outline)
  return (
    <button className={`btn btn-${variant}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;