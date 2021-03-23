import {SortTypes} from '../../const';
import {
  setLocation,
  redirect,
  setSort,
  ActionType
} from './actions';

describe(`Screen action creators work correctly`, () => {
  it(`Action creator for change location work correctly`, () => {
    const location = `Minsk`;
    const expectedAction = {
      type: ActionType.CHANGE_LOCATION,
      payload: location
    };

    expect(setLocation(location)).toEqual(expectedAction);
  });

  it(`Action creator for redirect work correctly`, () => {
    const url = `/login`;
    const expectedAction = {
      type: ActionType.REDIRECT,
      payload: url
    };

    expect(redirect(url)).toEqual(expectedAction);
  });

  it(`Action creator for change sort type work correctly`, () => {
    const sortType = SortTypes.PRICE_HIGH_TO_LOW;
    const expectedAction = {
      type: ActionType.CHANGE_SORT,
      payload: sortType
    };

    expect(setSort(sortType)).toEqual(expectedAction);
  });
});

