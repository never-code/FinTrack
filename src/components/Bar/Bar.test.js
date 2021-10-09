import React from 'react';
import { render } from '@testing-library/react';
import Bar from './Bar';

const data = [{
  name: 'Test',
  data: [1, 2, 3, 4],
}];
const categories = ['Cat1', 'Cat2'];
describe('Bar Graph: ', () => {
  it('should render successfully', () => {
    const { container } = render(<Bar data={data} categories={categories} backgroundColor="#FFFF"/ >);
    expect(container).toMatchSnapshot();
  });
});
