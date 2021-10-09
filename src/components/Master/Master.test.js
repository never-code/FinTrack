import React from 'react';
import { render } from '@testing-library/react';
import Master from './MasterContainer';

describe('Master ', () => {
  it('should render successfully', () => {
    const { container } = render(<Master />);
    expect(container).toMatchSnapshot();
  });
});
