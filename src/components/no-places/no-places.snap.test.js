import React from 'react';
import * as redux from 'react-redux';
import {render} from '@testing-library/react';
import NoPlaces from './no-places';
import configureStore from 'redux-mock-store';

const mockStore = configureStore({});
test(`Should render NoPlaces component correctly`, () => {
  jest.spyOn(redux, `useSelector`);
  const {getByText} = render(
      <redux.Provider store={mockStore({
        SCREEN: {location: `Minsk`}
      })}>
        <NoPlaces/>
      </redux.Provider>
  );
  const citiesStatus = getByText(`No places to stay available`);
  expect(citiesStatus).toBeInTheDocument();
});
