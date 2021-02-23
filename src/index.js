import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from '../src/components/app/app';
import {Offers} from '../src/mocks/offers.js';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App
        cards = {Offers}
      />
    </Provider>,
    document.querySelector(`#root`)
);

