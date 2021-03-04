import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import cardsPropTypes from '../places/places.prop.js';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {Comments} from '../../mocks/comments';
import {PrivateRoute} from '../private-route/private-route.jsx';
import {RoutePathes} from '../../const.js';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={RoutePathes.LOGIN_SCREEN} exact>
          <LoginScreen />
        </Route>

        <Route path={RoutePathes.MAIN_SCREEN} exact >
          <MainScreen />
        </Route>

        <PrivateRoute path={RoutePathes.FAVORITES_SCREEN} exact component={FavoritesScreen} />

        <Route path={RoutePathes.OFFER_SCREEN} exact render={(routeProps) => {
          const apartmentId = routeProps.match.params.id;

          return (
            <OfferScreen
              comments={Comments}
              apartmentId={apartmentId}
            />
          );
        }}/>

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
