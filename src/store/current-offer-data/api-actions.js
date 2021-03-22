import {APIRoutePathes, FetchStatus} from "../../const";
import * as actions from "./actions";

export const fetchCurrentOfferInfo = (id) => (dispatch, _getState, api) => (
  Promise.all([
    api.get(`${APIRoutePathes.HOTELS}/${id}`),
    api.get(`${APIRoutePathes.HOTELS}/${id}/nearby`),
    api.get(`${APIRoutePathes.COMMENTS}/${id}`)
  ])
  .then(([offer, nearBy, comments]) => {
    dispatch(actions.getCurrentOffer(offer.data));
    dispatch(actions.setLocation(offer.data.city.name));
    dispatch(actions.getNearPlaces(nearBy.data));
    dispatch(actions.getComments(comments.data));
  })
  .then(() => dispatch(actions.changeFetchStatus(FetchStatus.DONE)))
  .catch(() => dispatch(actions.changeFetchStatus(FetchStatus.ERROR)))
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
