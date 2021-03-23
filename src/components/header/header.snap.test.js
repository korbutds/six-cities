import React from 'react';
import {render} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import Header from './header';
test(`Header component render correctly`, () => {
  const {container} = render(
      <Test>
        <Header />
      </Test>
  );
  expect(container).toMatchSnapshot();
});
