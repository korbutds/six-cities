import React from 'react';
import {render} from '@testing-library/react';
import NoPlaces from './no-places';

test(`Should render NoPlaces component correctly`, () => {
  const {getByText} = render(<NoPlaces/>);
  const citiesStatus = getByText(`No places to stay available`);
  expect(citiesStatus).toBeInTheDocument();
});
