import React from 'react';
import {render} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import FavoritesScreen from './favorites-screen';
test(`Favorite Screen component render correctly`, () => {
  const {container} = render(
      <Test>
        <FavoritesScreen />
      </Test>
  );
  expect(container).toMatchSnapshot();
});
