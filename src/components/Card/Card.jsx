import React from 'react';
import './Card.scss';

const Card = ({title, subTitle, value, className }) => (
  <div className={`card-container ${className}`}>
    <div className="title">{title}</div>
    {subTitle && <div className="sub-title"><span>{subTitle}</span></div>}
    <div className="value">{value}</div>
  </div>
);
export default Card;