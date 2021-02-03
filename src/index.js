import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/app';

const cards = [
  {
    "previewImage": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
    "isPremium": false,
    "price": 120,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`,
    "rating": 4.8,
  },
  {
    "previewImage": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
    "isPremium": true,
    "price": 120,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`,
    "rating": 4.8,
  },
  {
    "previewImage": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
    "isPremium": false,
    "price": 120,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`,
    "rating": 4.8,
  },
  {
    "previewImage": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
    "isPremium": false,
    "price": 120,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`,
    "rating": 2.8,
  }
];

ReactDOM.render(
    <App
      cards = {cards}
    />,
    document.querySelector(`#root`)
);
