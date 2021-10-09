import React from 'react';

const Img = ({ src, ...rest }) => (
  <img src={src} {...rest}/>
);
export default Img;
