import React from 'react';
import {cardsPropTypes} from '../../prop-types';
import MainScreen from '../main/main';
import LoginScreen from '../login/login';
import FavoritesScreen from '../favorites/favorites';
import PropertyScreen from '../property/property';

const App = ({cards}) => (
  <>
    <LoginScreen />
    <MainScreen
      cards = {cards}
    />
    <FavoritesScreen />
    <PropertyScreen />
  </>
);


App.propTypes = {
  cards: cardsPropTypes
};

export default App;
