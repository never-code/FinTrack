import React from 'react';
import { render } from '@testing-library/react';
import Pie from './Pie';

describe('Pie Graph: ', () => {
  it('should render successfully', () => {
    const { container } = render(<Pie principal={65} interest={35} backgroundColor="#FFFF" />);
    expect(container).toMatchSnapshot();
  });
});
