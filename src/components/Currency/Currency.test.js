import React from 'react';
import { render } from '@testing-library/react';
import Currency from './Currency';

describe('SliderContainer ', () => {
  it('should render successfully', () => {
    const { container } = render(<Currency />);
    expect(container).toMatchSnapshot();
  });
});
