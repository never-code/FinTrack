import React, { useState } from 'react';
import './Currency.scss';

const CurrencyContainer = ({ change }) => {
  const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'INR');
  const onChange = (v) => {
    localStorage.setItem('currency', v);
    setCurrency(v);
    change();
  };
  return (
    <div className="currency-container">
      {/* <span>&#129504;</span> */}
      <select name="Currency" onChange={({ target: { value } }) => onChange(value)} value={currency}>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        {/* <option value="CNY">CNY</option> */}
      </select>
    </div>
  );
};

export default CurrencyContainer;
