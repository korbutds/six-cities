import React from 'react';
import {render} from '@testing-library/react';
import LoaderScreensaver from './loading';

test(`Should render LoaderScreensaver component correctly`, () => {
  const {container} = render(<LoaderScreensaver/>);
  expect(container).toMatchSnapshot();
});
