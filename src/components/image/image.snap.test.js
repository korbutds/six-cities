import React from 'react';
import {render} from '@testing-library/react';
import Image from './image';

test(`Shoul render Image component correctly`, () => {
  const image = `fakeurl`;
  const {container} = render(<Image image={image} />);
  expect(container).toMatchSnapshot();
});
