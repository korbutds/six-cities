import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import App from '../src/components/app/app';
import {Provider} from 'react-redux';
import rootReducer from './store/root-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createApi} from './services/api';
import {requireAuthorization} from './store/action';
import {AuthorizationStatus} from './const';
import {checkAuth, fetchCardsList} from './store/api-actions';
import {redirect} from './middlewares/redirect';


const api = createApi(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkAuth());
store.dispatch(fetchCardsList());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);

