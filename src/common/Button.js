import React from 'react';

const Button = ({ name, onClick, children, ...rest }) => (
  <button type="button" onClick={onClick} {...rest}>
    {name && name}
    {children && children}
  </button>
);
export default Button;
