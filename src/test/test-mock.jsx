import React from 'react';
import configureStore from 'redux-mock-store';
import {notEmptyStore} from './test-store';
import * as redux from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import PropTypes from 'prop-types';

export const Test = ({children, pushUrl}) => {
  jest.spyOn(redux, `useDispatch`);
  jest.spyOn(redux, `useSelector`);
  const mockStore = configureStore({});
  const store = mockStore(notEmptyStore);
  const history = createMemoryHistory();
  if (pushUrl) {
    history.push(pushUrl);
  }

  store.dispatch = () => {};

  return (
    <redux.Provider store={store}>
      <Router history={history}>
        {children}
      </Router>
    </redux.Provider>
  );
};

Test.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.arrayOf(PropTypes.object)]).isRequired,
  pushUrl: PropTypes.string
};
