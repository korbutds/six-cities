import {FetchStatus} from "../../const";
import {ActionType} from "../action";
import offersData from "./offers-data";

describe(`Ofers data reducers work correctly`, () => {

  it(`Reducer should add cards to state and change isCardsLoaded status`, () => {
    const initialState = {
      cards: [],
      isCardsLoaded: false,
      currentOffer: null,
      isOfferLoaded: false,
      fetchStatus: FetchStatus.PENDING
    };

    const getCardsAction = {
      type: ActionType.LOAD_CARDS,
      payload: [{foo: `foo`}, {bar: `bar`}]
    };

    const expectedState = {
      cards: [{foo: `foo`}, {bar: `bar`}],
      isCardsLoaded: true,
      currentOffer: null,
      isOfferLoaded: false,
      fetchStatus: FetchStatus.PENDING
    };

    expect(offersData(initialState, getCardsAction)).toEqual(expectedState);
  });

  it(`Reducer should change cards list after change card favorite status`, () => {
    const initialState = {
      cards: [
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

    const getChangeFavoriteStatusAction = {
      type: ActionType.CHANGE_FAVORITE_STATUS,
      payload: {
        id: 2,
        name: `foo`
      }
    };

    const expectedState = {
      cards: [
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

    expect(offersData(initialState, getChangeFavoriteStatusAction)).toEqual(expectedState);
  });

  it(`Reducer should change fetch status`, () => {
    const initialState = {
      fetchStatus: FetchStatus.PENDING
    };

    const changeFetchStatusAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: FetchStatus.SENDING
    };

    const expectedState = {
      fetchStatus: FetchStatus.SENDING
    };

    expect(offersData(initialState, changeFetchStatusAction)).toEqual(expectedState);
  });
});
