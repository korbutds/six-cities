import React from 'react';
import {render, screen} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import {notEmptyStore} from '../../test/test-store';
import NearPlacesList from './near-places-list';
test(`NearPlacesList component render correctly`, () => {
  render(
      <Test>
        <NearPlacesList card={notEmptyStore.CURRENT_OFFER.currentOffer}/>
      </Test>
  );
  expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
});
