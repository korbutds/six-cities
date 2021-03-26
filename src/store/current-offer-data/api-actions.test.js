import MockAdapter from "axios-mock-adapter";
import {APIRoutePath, FetchStatus} from "../../const";
import {createApi} from "../../services/api";
import {ActionType} from "./actions";
import {fetchCurrentOfferInfo, sendComment, sendFavoriteOfferScreenStatus} from "./api-actions";
const api = createApi(() => {});
describe(`Async current offer data operations work correctly`, () => {
  it(`Should make a correct API call to /hotels/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchCurrentOfferLoader = fetchCurrentOfferInfo(1);

    apiMock
      .onGet(`${APIRoutePath.HOTELS}/1`)
      .reply(200, {fake: true, city: {name: `fake`}})
      .onGet(`${APIRoutePath.HOTELS}/1/nearby`)
      .reply(200, [{fake: true}])
      .onGet(`${APIRoutePath.COMMENTS}/1`)
      .reply(200, [{fake: true}]);

    return fetchCurrentOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(5);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_CURRENT_OFFER,
          payload: {fake: true, city: {name: `fake`}}
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_LOCATION,
          payload: `fake`
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.LOAD_NEAR_PLACES,
          payload: [{fake: true}]
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.LOAD_COMMENTS,
          payload: [{fake: true}]
        });
        expect(dispatch).toHaveBeenNthCalledWith(5, {
          type: ActionType.CHANGE_FETCH_STATUS,
          payload: FetchStatus.DONE
        });
      });
  });
  it(`Should make a correct API call to /comments/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const sendCommentLoader = sendComment(1, {commentText: `fake`, rating: 1});

    apiMock
      .onPost(`${APIRoutePath.COMMENTS}/1`)
      .reply(200, [{fake: true}]);

    return sendCommentLoader(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(2);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.LOAD_COMMENTS,
            payload: [{fake: true}]
          });
          expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: ActionType.CHANGE_FETCH_STATUS,
            payload: FetchStatus.DONE
          });
        });
  });
  it(`Should make correct API call to /favorite/id/isFavorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const sendFavoriteOfferScreenStatusLoader = sendFavoriteOfferScreenStatus(1, 1);

    apiMock
      .onPost(`${APIRoutePath.FAVORITE}/1/1`)
      .reply(200, {fake: true});

    return sendFavoriteOfferScreenStatusLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_FAVORITE_STATUS,
          payload: {fake: true}
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_CURRENT_OFFER,
          payload: {fake: true}
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.CHANGE_FETCH_STATUS,
          payload: FetchStatus.DONE
        });
      });
  });
});
