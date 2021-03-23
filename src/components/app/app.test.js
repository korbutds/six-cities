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

jest.mock(`../../store/offers-data/api-actions`, () => {
  return {
    fetchFavoritesCards: jest.fn().mockImplementation(() => {
      return {
        type: `test`,
        payload: 1
      };
    })
  };
});

jest.mock(`../../store/current-offer-data/api-actions`, () => {
  return {
    fetchCurrentOfferInfo: jest.fn().mockImplementation(() => {
      return {
        type: `test`,
        payload: []
      };
    })
  };
});

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
            isFavoriteCardsLoaded: true,
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
    history.push(`${RoutePathes.OFFER_SCREEN}/1`);
    render(
        <redux.Provider store={mockStore({
          USER: {
            authorizationStatus: AuthorizationStatus.AUTH
          },
          CURRENT_OFFER: {
            currentOffer: {
              "bedrooms": 3,
              "city": {
                "location": {
                  "latitude": 52.370216,
                  "longitude": 4.895168,
                  "zoom": 10
                },
                "name": `Amsterdam`
              },
              "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
              "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
              "host": {
                "avatar_url": `img/1.png`,
                "id": 3,
                "is_pro": true,
                "name": `Angelina`
              },
              "id": 1,
              "images": [`img/1.png`, `img/2.png`],
              "is_favorite": false,
              "is_premium": false,
              "location": {
                "latitude": 52.35514938496378,
                "longitude": 4.673877537499948,
                "zoom": 8
              },
              "max_adults": 4,
              "preview_image": `img/1.png`,
              "price": 120,
              "rating": 4.8,
              "title": `Beautiful & luxurious studio at great location`,
              "type": `apartment`
            },
            isOfferLoaded: false,
            nearPlaces: [],
            isNearPlacesLoaded: false,
            comments: [],
            isCommentsLoaded: false
          },
          DATA: {
            fetchStatus: FetchStatus.DONE
          },
          SCREEN: {location: `Amsterdam`}
        })}>
          <Router history={history}>
            <OfferScreen apartmentId={`1`}/>
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Beautiful & luxurious studio at great location/i)).toBeInTheDocument();
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
