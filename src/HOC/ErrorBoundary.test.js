import React from 'react';
import { render } from '@testing-library/react';
import Error from './ErrorBoubdray';

describe('SliderContainer ', () => {
  it('should render successfully', () => {
    const { container } = render(
      <Error>
        <span>Test</span>
      </Error>
    );
    expect(container).toMatchSnapshot();
  });
});

