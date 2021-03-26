import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {RoutePath} from '../../const';

const App = () => {
  return (
    <Switch>
      <Route path={RoutePath.LOGIN_SCREEN} exact>
        <LoginScreen />
      </Route>

      <Route path={RoutePath.MAIN_SCREEN} exact >
        <MainScreen />
      </Route>
      <Route path ={RoutePath.FAVORITES_SCREEN} exact>
        <PrivateRoute component={() => <FavoritesScreen />} noAuth={() => <Redirect to={RoutePath.LOGIN_SCREEN}/>}/>
      </Route>

      <Route path={RoutePath.OFFER_SCREEN} exact render={(routeProps) => {
        const apartmentId = routeProps.match.params.id;

        return (
          <OfferScreen
            apartmentId={apartmentId}
          />
        );
      }}/>

      <Route >
        <NotFoundScreen />
      </Route>

    </Switch>
  );
};

export default App;
