import React from 'react';
import {render, screen} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import NearPlacesCard from './near-places-card';
import {notEmptyStore} from '../../test/test-store';
test(`earPlacesCard component render correctly`, () => {
  render(
      <Test>
        <NearPlacesCard card={notEmptyStore.CURRENT_OFFER.currentOffer}/>
      </Test>
  );
  expect(screen.getByText(/In bookmarks/i)).toBeInTheDocument();
});
