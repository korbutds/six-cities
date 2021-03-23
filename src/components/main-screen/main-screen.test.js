import React from 'react';
import {render, screen} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import MainScreen from './main-screen';
test(`Main screen component render correctly`, () => {
  render(
      <Test>
        <MainScreen />
      </Test>
  );
  expect(screen.getByText(/Fake login/i)).toBeInTheDocument();
  expect(screen.getByText(/Hamburg/i)).toBeInTheDocument();
});
