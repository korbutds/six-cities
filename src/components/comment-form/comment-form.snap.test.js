import React from 'react';
import {render} from '@testing-library/react';
import {Test} from '../../test/test-mock';
import CommentForm from './comment-form';
test(`CommentForm component render correctly`, () => {
  const {container} = render(
      <Test>
        <CommentForm id={1}/>
      </Test>
  );
  expect(container).toMatchSnapshot();
});
