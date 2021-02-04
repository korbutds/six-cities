import React from 'react';
import {cardsPropTypes} from '../../prop-types';


import MainScreen from '../main/main';

const App = ({cards}) => (
  <MainScreen
    cards = {cards}
  />
);


App.propTypes = {
  cards: cardsPropTypes
};

export default App;
