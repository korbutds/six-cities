import {ActionType, clearCurrentOffer} from "./actions";
import currentOfferData from "./reducer";

describe(`Current offer data reducers work correctly`, () => {
  it(`Reducer should return default`, () => {
    const initialState = {
      currentOffer: {},
      nearPlaces: [`foo`, `bar`],
      comments: [`foo`, `bar`],
    };

    const expectedState = {
      currentOffer: null,
      nearPlaces: [],
      comments: [],
    };

    expect(currentOfferData(initialState, clearCurrentOffer())).toEqual(expectedState);
  });

  it(`Reducer should cahange near places list when change favorite status`, () => {
    const initialState = {
      nearPlaces: [
        {
          id: 1,
          name: `foo`
        },
        {
          id: 2,
          name: `bar`
        }
      ]
    };

    const nearPlaceChangeAction = {
      type: ActionType.CHANGE_FAVORITE_STATUS,
      payload: {
        id: 2,
        name: `foo`
      }
    };

    const expectedState = {
      nearPlaces: [
        {
          id: 1,
          name: `foo`
        },
        {
          id: 2,
          name: `foo`
        }
      ]
    };

    expect(currentOfferData(initialState, nearPlaceChangeAction)).toEqual(expectedState);
  });
});
