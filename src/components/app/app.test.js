import React from 'react';
import configureStore from "redux-mock-store";
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import App from './app';
import {AuthorizationStatus, CityList, FetchStatus, RoutePathes} from '../../const';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import thunk from 'redux-thunk';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe(`Test routing`, () => {
  const history = createMemoryHistory();
  jest.spyOn(redux, `useDispatch`);
  jest.spyOn(redux, `useSelector`);
  it(`Render MainScreen component when user navigate to '/' url`, () => {
    history.push(RoutePathes.MAIN_SCREEN);
    render(
        <redux.Provider store={mockStore({
          DATA: {
            isCardsLoaded: true,
            cards: []
          },
          SCREEN: {
            location: CityList.Amsterdam
          },
          USER: {
            authorizationStatus: AuthorizationStatus.NO_AUTH
          }
        })}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Cities`)).toBeInTheDocument();
  });
  it(`Render LoginScreen component correctly when user navigate to '/login'`, () => {
    history.push(RoutePathes.LOGIN_SCREEN);
    render(
        <redux.Provider store={mockStore({
          USER: {
            authorizationStatus: AuthorizationStatus.NO_AUTH
          }
        })}>
          <Router history={history}>
            <LoginScreen />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });

  it(`Render FavoriteScreen component correctly when user navigate to '/favorite'`, () => {
    history.push(RoutePathes.FAVORITES_SCREEN);
    render(
        <redux.Provider store={mockStore({
          USER: {
            authorizationStatus: AuthorizationStatus.AUTH
          },
          DATA: {
            isCardsLoaded: true,
            cards: []
          },
        })}>
          <Router history={history}>
            <FavoritesScreen />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
    expect(screen.getByText(/Save properties to narrow down search or plan your future trips./i)).toBeInTheDocument();
  });
  it(`Render OfferScreen component correctly when user navigate to '/offer:id'`, () => {
    history.push(`${RoutePathes.FAVORITES_SCREEN}:1`);
    render(
        <redux.Provider store={mockStore({
          USER: {
            authorizationStatus: AuthorizationStatus.AUTH
          },
          CURRENT_OFFER: {
            currentOffer: {},
            isOfferLoaded: false,
            nearPlaces: [],
            isNearPlacesLoaded: false,
            comments: [],
            isCommentsLoaded: false
          },
          DATA: {
            fetchStatus: FetchStatus.DONE
          }
        })}>
          <Router history={history}>
            <OfferScreen apartmentId={`1`}/>
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/To bookmarks/i)).toBeInTheDocument();
  });
  it(`Render NotFoundScreen component correctly when user navigate to no exist page`, () => {
    history.push(`/non-existent-route`);
    render(
        <redux.Provider store={mockStore({
          USER: {
            authorizationStatus: AuthorizationStatus.NO_AUTH
          }
        })}>
          <Router history={history}>
            <NotFoundScreen />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/We are sorry, but page not found/i)).toBeInTheDocument();
  });

});
