import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Header ', () => {
  it('should render successfully', () => {
    const { container } = render(
      <Card
        title="Card Title"
        subTitle="This is Subtitle"
        value={123123123123}
        className="test"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
