import React from 'react';
import {render} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import Places from './places';
test(`Places component render correctly`, () => {
  const {container} = render(
      <Test>
        <Places />
      </Test>
  );
  expect(container).toMatchSnapshot();
});
