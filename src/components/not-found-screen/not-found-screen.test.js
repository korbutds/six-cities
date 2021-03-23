import React from 'react';
import {render, screen} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import NotFoundScreen from './not-found-screen';

test(`NotFoundScreen component render correctly`, () => {
  render(
      <Test>
        <NotFoundScreen />
      </Test>
  );
  expect(screen.getByText(/We are sorry, but page not found/i)).toBeInTheDocument();
});
