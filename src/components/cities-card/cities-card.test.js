import React from 'react';
import {render, screen} from '@testing-library/react';
import configureStore from "redux-mock-store";
import * as redux from 'react-redux';
import CitiesCard from './cities-card';
import {AuthorizationStatus, FetchStatus} from '../../const';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

const mockStore = configureStore({});
describe(`Should render cities-card component correctly`, () => {
  const history = createMemoryHistory();
  jest.spyOn(redux, `useDispatch`);
  jest.spyOn(redux, `useSelector`);
  const mockCard = {
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
  };
  it(`Card render correctly`, () => {

    render(
        <redux.Provider store={mockStore({
          DATA: {fetchStatus: FetchStatus.DONE},
          USER: {authorizationStatus: AuthorizationStatus.AUTH}
        })}>
          <Router history={history}>
            <CitiesCard card={mockCard}/>
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Beautiful & luxurious studio at great location/i)).toBeInTheDocument();
  });
});
