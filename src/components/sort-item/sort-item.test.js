import React from 'react';
import {render, screen} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import SortItem from './sort-item';

test(`SortItem component render correctly`, () => {
  render(
      <Test>
        <SortItem sortType={`fake`}/>
      </Test>
  );
  expect(screen.getByText(/fake/i)).toBeInTheDocument();
});
