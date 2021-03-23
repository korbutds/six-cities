import React from 'react';
import {render} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import FavoritesCard from './favorites-card';
import {notEmptyStore} from '../../test/test-store';
test(`FavoritesCard component render correctly`, () => {
  const {container} = render(
      <Test>
        <FavoritesCard card={notEmptyStore.CURRENT_OFFER.currentOffer}/>
      </Test>
  );
  expect(container).toMatchSnapshot();
});
