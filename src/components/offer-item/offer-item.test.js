import React from 'react';
import {render, screen} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import OfferItem from './offer-item';

test(`OfferItem component render correctly`, () => {
  render(
      <Test>
        <OfferItem offer={`fake`}/>
      </Test>
  );
  expect(screen.getByText(/fake/i)).toBeInTheDocument();
});
