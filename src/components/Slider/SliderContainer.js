import React, { useState } from 'react';
import SliderComponent from './SliderComponent';

const SliderContainer = ({ min, max, step, unit, getValue, defaultValue, name }) => {
  const [state, setState] = useState({ value: defaultValue });
  const onChange = ({ target: { value } }) => {
    setState({
      ...state,
      value,
    });
    getValue(value);
  };
  const { value } = state;
  return (
    <SliderComponent
      max={max}
      min={min}
      step={step}
      value={value}
      onChange={onChange}
      unit={unit}
      name={name}
    />
  );
};

export default SliderContainer;
