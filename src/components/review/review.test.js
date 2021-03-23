import React from 'react';
import {render, screen} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import Review from './review';
import {notEmptyStore} from '../../test/test-store';

test(`Review component render correctly`, () => {
  render(
      <Test>
        <Review review={notEmptyStore.CURRENT_OFFER.comments[0]}/>
      </Test>
  );
  expect(screen.getByText(/The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you./i)).toBeInTheDocument();
});
