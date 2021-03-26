import {FetchStatus} from "../../const";
import {ActionType} from "./actions";
import offersData from "./reducer";

describe(`Ofers data reducers work correctly`, () => {

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
