import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Header ', () => {
  it('should render successfully', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
