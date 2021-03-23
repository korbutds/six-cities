import React from 'react';
import {render} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import LocationList from './location-list';
test(`Location List component render correctly`, () => {
  const {container} = render(
      <Test>
        <LocationList />
      </Test>
  );
  expect(container).toMatchSnapshot();
});
