import React from 'react';
import './Slider.scss';
import { formatCurrency } from '../../utils/helper';

const SliderComponent = ({ value, min, max, step, onChange, onBlur, onFocus, unit, name }) => (
  <div className="slider-container">
    {/* <div className="popup-value">
      <span className="popup">{value}</span>
    </div> */}
    <div className="selected-value">
      <span className="value">{name === 'loanAmount' ? formatCurrency(value * 10000, 0) : value}</span>
      {unit && <span className="unit">{unit}</span>}
    </div>
    <div className="field">
      <div className="value min">{min}</div>
      <input
        type="range"
        min={min}
        max={max}
        defaultValue={value}
        step={step}
        onChange={onChange}
      />
      <div className="value max">{max}</div>
    </div>
  </div>
);

export default SliderComponent;
