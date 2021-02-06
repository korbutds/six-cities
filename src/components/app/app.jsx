import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {cardsPropTypes} from '../../prop-types';
import MainScreen from '../main/main';
import LoginScreen from '../login/login';
import FavoritesScreen from '../favorites/favorites';
import PropertyScreen from '../property/property';
import NotFoundScreen from '../not-found/not-found';

const App = ({cards}) => {
  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <MainScreen
            cards = {cards}
          />
        </Route>

        <Route path="/login" exact>
          <LoginScreen />
        </Route>

        <Route path="/favorites" exact>
          <FavoritesScreen />
        </Route>

        <Route path="/offer/:id" exact>
          <PropertyScreen />
        </Route>

        <Route>
          <NotFoundScreen />
        </Route>

      </Switch>
    </Router>
  );
};


App.propTypes = {
  cards: cardsPropTypes
};

export default App;
