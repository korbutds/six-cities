import React from 'react';
import {render} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import OfferScreen from './offer-screen';
test(`OfferScreen component render correctly`, () => {
  const {container} = render(
      <Test>
        <OfferScreen apartmentId={`1`} />
      </Test>
  );
  expect(container).toMatchSnapshot();
});
