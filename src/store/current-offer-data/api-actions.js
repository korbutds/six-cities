import {APIRoutePathes, FetchStatus} from "../../const";
import * as actions from "./actions";

export const fetchCurrentOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutePathes.HOTELS}/${id}`)
  .then(({data}) => {
    dispatch(actions.getCurrentOffer(data));
    dispatch(actions.setLocation(data.city.name));
  })
);

export const fetchNearPlacesList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutePathes.HOTELS}/${id}/nearby`).
    then(({data}) => dispatch(actions.getNearPlaces(data)))
    .then(() => dispatch(actions.changeFetchStatus(FetchStatus.DONE)))
);

export const fetchCommentsList = (id) => (dispatch, _state, api) => (
  api.get(`${APIRoutePathes.COMMENTS}/${id}`)
    .then(({data}) => dispatch(actions.getComments(data)))
);

export const sendComment = (id, {commentText: comment, rating}) => (dispatch, _state, api) => (
  api.post(`${APIRoutePathes.COMMENTS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(actions.getComments(data)))
    .then(() => dispatch(actions.changeFetchStatus(FetchStatus.DONE)))
    .catch(() => dispatch(actions.changeFetchStatus(FetchStatus.ERROR)))
    .finally(() => setTimeout(() => (dispatch(actions.changeFetchStatus(FetchStatus.PENDING))), 5000))
);

export const sendFavoriteStatus = (id, favorite) => (dispatch, _state, api) => (
  api.post(`${APIRoutePathes.FAVORITE}/${id}/${favorite}`)
    .then(({data}) => dispatch(actions.changeFavoriteStatus(data)))
    .then(() => dispatch(actions.changeFetchStatus(FetchStatus.DONE)))
    .catch(() => dispatch(actions.changeFetchStatus(FetchStatus.ERROR)))
    .finally(() => setTimeout(() => (dispatch(actions.changeFetchStatus(FetchStatus.PENDING))), 5000))
);

export const sendFavoriteOfferScreenStatus = (id, favorite) => (dispatch, _state, api) => (
  api.post(`${APIRoutePathes.FAVORITE}/${id}/${favorite}`)
    .then(({data}) => {
      dispatch(actions.changeFavoriteStatus(data));
      dispatch(actions.getCurrentOffer(data));
    })
    .then(() => dispatch(actions.changeFetchStatus(FetchStatus.DONE)))
    .catch(() => dispatch(actions.changeFetchStatus(FetchStatus.ERROR)))
);
