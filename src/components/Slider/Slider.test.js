import React from 'react';
import { render } from '@testing-library/react';
import SliderContainer from './SliderContainer';
import SliderComponent from './SliderComponent';

describe('SliderContainer ', () => {
  it('should render successfully', () => {
    const { container } = render(<SliderContainer />);
    expect(container).toMatchSnapshot();
  });
});

describe('SliderComponent ', () => {
  it('should render successfully', () => {
    const { container } = render(<SliderComponent />);
    expect(container).toMatchSnapshot();
  });
});
