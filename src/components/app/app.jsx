import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {cardsPropTypes} from '../../prop-types';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreen from '../property-screen/property-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const routePathes = {
  MAIN_SCREEN: `/`,
  LOGIN_SCREEN: `/login`,
  FAVORITES_SCREEN: `/favorites`,
  PROPERTY_SCREEN: `/offer/:id`,
};

const App = ({cards}) => {
  return (
    <Router>
      <Switch>

        <Route path={routePathes.MAIN_SCREEN} exact>
          <MainScreen
            cards = {cards}
          />
        </Route>

        <Route path={routePathes.LOGIN_SCREEN} exact>
          <LoginScreen />
        </Route>

        <Route path={routePathes.FAVORITES_SCREEN} exact>
          <FavoritesScreen />
        </Route>

        <Route path={routePathes.PROPERTY_SCREEN} exact>
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
