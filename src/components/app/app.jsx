import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import cardsPropTypes from '../places/places.prop.js';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {Comments} from '../../mocks/comments';

const RoutePathes = {
  MAIN_SCREEN: `/`,
  LOGIN_SCREEN: `/login`,
  FAVORITES_SCREEN: `/favorites`,
  OFFER_SCREEN: `/offer/:id`,
};

const App = ({cards}) => {
  return (
    <Router>
      <Switch>

        <Route path={RoutePathes.MAIN_SCREEN} exact>
          <MainScreen
            cards = {cards}
          />
        </Route>

        <Route path={RoutePathes.LOGIN_SCREEN} exact>
          <LoginScreen />
        </Route>

        <Route path={RoutePathes.FAVORITES_SCREEN} exact>
          <FavoritesScreen cards = {cards}/>
        </Route>

        <Route path={RoutePathes.OFFER_SCREEN} exact render={(routeProps) => {
          const apartmentId = routeProps.match.params.id;
          const card = cards.find(({id}) => {
            return id === parseFloat(apartmentId);
          });
          return (
            <OfferScreen
              card={card}
              comments={Comments}

              nearPlaces={[...cards.slice(0, apartmentId - 1), ...cards.slice(apartmentId)]}
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
