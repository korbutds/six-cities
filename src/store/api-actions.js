import {APIRoutePathes, AuthorizationStatus, RoutePathes} from "../const";
import {getCurrentOffer, getCards, getNearPlaces, setUserName, setUserInfo, requireAuthorization, redirect, getComments, setUserAvatar, changeFavoriteStatus} from "./action";

export const fetchCardsList = () => (dispatch, _getState, api) => (
  api.get(APIRoutePathes.HOTELS)
    .then(({data}) => dispatch(getCards(data)))
);

export const fetchCurrentOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutePathes.HOTELS}/${id}`)
    .then(({data}) => dispatch(getCurrentOffer(data)))
);

export const fetchNearPlacesList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutePathes.HOTELS}/${id}/nearby`).
    then(({data}) => dispatch(getNearPlaces(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutePathes.LOGIN)
  .then((response) => dispatch(setUserInfo(response.data.email, response.data[`avatar_url`])))
  .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
  .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoutePathes.LOGIN, {email, password})
    .then((response) => dispatch(setUserInfo(response.data.email, response.data[`avatar_url`])))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirect(RoutePathes.MAIN_SCREEN)))
    .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const logout = () => (dispatch, _state, api) => {
  api.get(APIRoutePathes.LOGOUT)
    .then(() => dispatch(setUserName(``)))
    .then(() => dispatch(setUserAvatar(``)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)));
};

export const fetchCommentsList = (id) => (dispatch, _state, api) => {
  api.get(`${APIRoutePathes.COMMENTS}/${id}`)
    .then(({data}) => dispatch(getComments(data)));
};

export const sendComment = (id, {commentText: comment, rating}) => (dispatch, _state, api) => {
  api.post(`${APIRoutePathes.COMMENTS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(getComments(data)));
};

export const sendFavoriteStatus = (card, favorite) => (dispatch, _state, api) => {
  api.post(`${APIRoutePathes.FAVORITE}/${card.id}/${favorite}`)
    .then(({data}) => dispatch(changeFavoriteStatus(data)))
    .catch(() => {});
};
