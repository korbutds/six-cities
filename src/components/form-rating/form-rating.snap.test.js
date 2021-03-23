import React from 'react';
import {render} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import FormRating from './form-rating';
test(`CommentForm component render correctly`, () => {
  const {container} = render(
      <Test>
        <FormRating />
      </Test>
  );
  expect(container).toMatchSnapshot();
});
