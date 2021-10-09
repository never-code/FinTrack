import React from 'react';

const Title = ({ title, children, subTitle }) => (
  <>
    <h2 className="background double">
      <span>{title}</span>
      <span className="sub-title">{subTitle}</span>
    </h2>
    {children}
  </>
);

export default Title;