import React from 'react';
import {render} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import OffersList from './offers-list';
import {notEmptyStore} from '../../test/test-store';
test(`OffersList component render correctly`, () => {
  const {container} = render(
      <Test>
        <OffersList offers={notEmptyStore.CURRENT_OFFER.currentOffer.goods} />
      </Test>
  );
  expect(container).toMatchSnapshot();
});
