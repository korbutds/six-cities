import MockAdapter from "axios-mock-adapter";
import {APIRoutePathes, FetchStatus} from "../../const";
import {createApi} from "../../services/api";
import {ActionType} from "./actions";
import {fetchCommentsList, fetchCurrentOffer, fetchNearPlacesList, sendComment, sendFavoriteOfferScreenStatus} from "./api-actions";
const api = createApi(() => {});
describe(`Async current offer data operations work correctly`, () => {
  it(`Should make a correct API call to /hotels/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchCurrentOfferLoader = fetchCurrentOffer(1);

    apiMock
      .onGet(`${APIRoutePathes.HOTELS}/1`)
      .reply(200, {fake: true, city: {name: `fake`}});

    return fetchCurrentOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_CURRENT_OFFER,
          payload: {fake: true, city: {name: `fake`}}
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_LOCATION,
          payload: `fake`
        });
      });
  });
  it(`Should make a correct API call to /hotels/id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchNearPlacesListLoader = fetchNearPlacesList(1);

    apiMock
    .onGet(`${APIRoutePathes.HOTELS}/1/nearby`)
    .reply(200, [{fake: true}]);

    return fetchNearPlacesListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEAR_PLACES,
          payload: [{fake: true}]
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_FETCH_STATUS,
          payload: FetchStatus.DONE
        });
      });
  });
  it(`Should make a correct API call to /comments/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchCommentsListLoader = fetchCommentsList(1);

    apiMock
      .onGet(`${APIRoutePathes.COMMENTS}/1`)
      .reply(200, [{fake: true}]);

    return fetchCommentsListLoader(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.LOAD_COMMENTS,
            payload: [{fake: true}]
          });
        });
  });
  it(`Should make a correct API call to /comments/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const sendCommentLoader = sendComment(1, {commentText: `fake`, rating: 1});

    apiMock
      .onPost(`${APIRoutePathes.COMMENTS}/1`)
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
      .onPost(`${APIRoutePathes.FAVORITE}/1/1`)
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
