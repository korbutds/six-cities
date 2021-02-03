import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/app';

fetch(`https://6.react.pages.academy/six-cities/hotels`)
              .then((response) => response.json())
              .then((response) => {
                ReactDOM.render(
                    <App
                      cards = {response}
                    />,
                    document.querySelector(`#root`)
                );
              });

