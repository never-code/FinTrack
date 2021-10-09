import React from 'react';

const Section = ({ children, ...rest }) => (
  <>
  <div className="section" {...rest}>
    {children}
  </div>
  {/* <hr /> */}
  </>
);

export default Section;
