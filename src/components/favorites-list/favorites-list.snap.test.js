import React from 'react';
import {render} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import {notEmptyStore} from '../../test/test-store';
import FavotritesList from './favorites-list';
test(`FavoritesList component render correctly`, () => {
  const {container} = render(
      <Test>
        <FavotritesList favoritesCards={notEmptyStore.DATA.favoriteCard} />
      </Test>
  );
  expect(container).toMatchSnapshot();
});
