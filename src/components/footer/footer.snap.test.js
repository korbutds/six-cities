import React from 'react';
import {render} from '@testing-library/react';
import Footer from './footer';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
test(`Should Footer render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <Footer />
      </Router>
  );
  expect(container).toMatchSnapshot();
});
