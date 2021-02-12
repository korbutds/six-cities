import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/app';
import {Offers} from '../src/mocks/offers.js';

ReactDOM.render(
    <App
      cards = {Offers}
    />,
    document.querySelector(`#root`)
);

