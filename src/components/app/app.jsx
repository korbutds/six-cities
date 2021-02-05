import React from 'react';
import {cardsPropTypes} from '../../prop-types';
import MainScreen from '../main/main';
import LoginScreen from '../login/login';
import FavoritesScreen from '../favorites/favorites';
import PropertyScreen from '../property/property';
import NotFoundScreen from '../404/404';

const App = ({cards}) => (
  <>
    <LoginScreen />
    <MainScreen
      cards = {cards}
    />
    <FavoritesScreen />
    <PropertyScreen />
    <NotFoundScreen />
  </>
);


App.propTypes = {
  cards: cardsPropTypes
};

export default App;
