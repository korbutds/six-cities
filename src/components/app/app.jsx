import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {cardsPropTypes} from '../../prop-types';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {Comments} from '../../mocks/comments';

const routePathes = {
  MAIN_SCREEN: `/`,
  LOGIN_SCREEN: `/login`,
  FAVORITES_SCREEN: `/favorites`,
  OFFER_SCREEN: `/offer/:id`,
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
          <FavoritesScreen cards = {cards}/>
        </Route>

        <Route path={routePathes.OFFER_SCREEN} exact render={(routeProps) => {
          const apartmentId = routeProps.match.params.id;
          return (
            <OfferScreen
              card={cards.find((card) => {
                return card.id === parseFloat(apartmentId);
              }
              )}
              comments={Comments}

              nearPlaces={cards.slice(0, 3)}
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
