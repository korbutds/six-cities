import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import App from '../src/components/app/app';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createApi} from './services/api';
import {ActionCreators} from './store/action';
import {AuthorizationStatus} from './const';
import {checkAuth} from './store/api-actions';


const api = createApi(
    () => store.dispatch(ActionCreators.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(checkAuth);

ReactDOM.render(
    <Provider store={store}>
      <App
        cards = {[]}
      />
    </Provider>,
    document.querySelector(`#root`)
);

