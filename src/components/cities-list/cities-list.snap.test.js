import React from 'react';
import {render} from '@testing-library/react';
import CitiesList from './cities-list';
import configureStore from "redux-mock-store";
import * as redux from 'react-redux';
import {AuthorizationStatus, FetchStatus} from '../../const';

const mockStore = configureStore({});
test(`Should render cities-list correctly`, () => {
  jest.spyOn(redux, `useDispatch`);
  jest.spyOn(redux, `useSelector`);
  const {container} = render(
      <redux.Provider store={mockStore({
        USER: {
          authorizationStatus: AuthorizationStatus.AUTH
        },
        DATA: {
          fetchStatus: FetchStatus.DONE,
          cards: []
        },
        SCREEN: {location: `Amsterdam`}
      })}>
        <CitiesList/>
      </redux.Provider>
  );
  expect(container).toMatchSnapshot();
});
