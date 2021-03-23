import React from 'react';
import {render} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import HeaderNavigation from './header-navigation';
test(`Header navigation component render correctly`, () => {
  const {container} = render(
      <Test>
        <HeaderNavigation />
      </Test>
  );
  expect(container).toMatchSnapshot();
});
