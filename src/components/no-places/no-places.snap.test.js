import React from 'react';
import {render} from '@testing-library/react';
import NoPlaces from './no-places';

test(`Should render NoPlaces component correctly`, () => {
  const {container} = render(<NoPlaces/>);
  expect(container).toMatchSnapshot();
});
