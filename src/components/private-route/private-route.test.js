import {createMemoryHistory} from 'history';
import React from 'react';
import {Router, Route} from 'react-router-dom';
import * as redux from 'react-redux';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../const';
import PrivateRoute from './private-route';
import {render, screen} from '@testing-library/react';

const mockStore = configureStore({});
let history;
describe(`Private-route work correctly`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(`/private`);
  });
  it(`If user no autorized he'll be redirect to /login`, () => {
    jest.spyOn(redux, `useSelector`);
    jest.spyOn(redux, `useDispatch`);
    const store = mockStore({
      DATA: {cards: []},
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });
    render(
        <Provider store={store}>
          <Router history={history}>
            <Route exact path="/login"></Route>
            <PrivateRoute
              exact
              path="/private"
              component={() => (<h1>Private Route</h1>)}
              noAuth={() => (<h1>Public Route</h1>)}
            />
          </Router>
        </Provider>
    );
    expect(screen.getByText(/Public Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).not.toBeInTheDocument();
  });
  it(`If user autorized he'll be redirect to /login`, () => {
    jest.spyOn(redux, `useSelector`);
    jest.spyOn(redux, `useDispatch`);
    const store = mockStore({
      DATA: {cards: []},
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });
    render(
        <Provider store={store}>
          <Router history={history}>
            <Route exact path="/login"></Route>
            <PrivateRoute
              exact
              path="/private"
              component={() => (<h1>Private Route</h1>)}
              noAuth={() => (<h1>Public Route</h1>)}
            />
          </Router>
        </Provider>
    );
    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).not.toBeInTheDocument();
  });
});
