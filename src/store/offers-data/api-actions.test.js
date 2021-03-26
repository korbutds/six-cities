import MockAdapter from "axios-mock-adapter";
import {APIRoutePath, FetchStatus} from "../../const";
import {createApi} from "../../services/api";
import {ActionType} from "./actions";
import {fetchCardsList, fetchFavoritesCards, sendFavoriteStatus} from "./api-actions";

const api = createApi(() => {});
describe(`Async offers data operations work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getCardsLoader = fetchCardsList();

    apiMock
      .onGet(APIRoutePath.HOTELS)
      .reply(200, [{fake: true}]);

    return getCardsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_CARDS,
          payload: [{fake: true}]
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getFavoriteCardsLoader = fetchFavoritesCards();

    apiMock
      .onGet(APIRoutePath.FAVORITE)
      .reply(200, [{fake: true}]);

    return getFavoriteCardsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE,
          payload: [{fake: true}]
        });
      });
  });

  it(`Should make correct API call to /favorite/id/isFavorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const sendFavoriteStatusLoader = sendFavoriteStatus(1, 1);

    apiMock
      .onPost(`${APIRoutePath.FAVORITE}/1/1`)
      .reply(200, {fake: true});

    return sendFavoriteStatusLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_FAVORITE_STATUS,
          payload: {fake: true}
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_FETCH_STATUS,
          payload: FetchStatus.DONE
        });
      });
  });
});
