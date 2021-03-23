import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import App from '../src/components/app/app';
import {Provider} from 'react-redux';
import rootReducer from './store/root-reducer';
import {createApi} from './services/api';
import {AuthorizationStatus} from './const';
import {checkAuth} from './store/user-data/api-actions';
import {redirect} from './middlewares/redirect';
import {requireAuthorization} from './store/user-data/actions';
import {fetchCardsList} from './store/offers-data/api-actions';
import {Router} from 'react-router-dom';
import browserHistory from './browser-history';

const api = createApi(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    }).concat(redirect)
});

store.dispatch(checkAuth());
store.dispatch(fetchCardsList());

ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <App />
      </Router>
    </Provider>,
    document.querySelector(`#root`)
);

