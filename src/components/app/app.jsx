import React from 'react';
import {Switch, Route, Router, Redirect} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {Comments} from '../../mocks/comments';
import PrivateRoute from '../private-route/private-route';
import {RoutePathes} from '../../const';
import browserHistory from '../../browser-history';

const App = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route path={RoutePathes.LOGIN_SCREEN} exact>
          <LoginScreen />
        </Route>

        <Route path={RoutePathes.MAIN_SCREEN} exact >
          <MainScreen />
        </Route>
        <Route path ={RoutePathes.FAVORITES_SCREEN} exact>
          <PrivateRoute component={() => <FavoritesScreen />} noAuth={() => <Redirect to={RoutePathes.LOGIN_SCREEN}/>}/>
        </Route>

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

export default App;
