import {APIRoutePathes, AuthorizationStatus, RoutePathes} from "../const";
import {ActionCreators} from "./action";

export const fetchCardsList = () => (dispatch, _getState, api) => (
  api.get(APIRoutePathes.HOTELS)
    .then(({data}) => dispatch(ActionCreators.getCards(data)))
);

export const fetchNearPlacesList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutePathes.HOTELS}/${id}/nearby`).
    then(({data}) => dispatch(ActionCreators.getNearPlaces(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutePathes.LOGIN)
  .then(({data}) => {
    dispatch(ActionCreators.setUserName(data.email));
  })
    .then(() => dispatch(ActionCreators.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(ActionCreators.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoutePathes.LOGIN, {email, password})
    .then(() => dispatch(ActionCreators.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreators.setUserName(email)))
    .then(() =>dispatch(ActionCreators.redirect(RoutePathes.MAIN_SCREEN)))
    .catch(() => dispatch(ActionCreators.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const logout = () => (dispatch, _state, api) => {
  api.get(`/logout`)
    .then(() => dispatch(ActionCreators.setUserName(``)))
    .then(() => dispatch(ActionCreators.requireAuthorization(AuthorizationStatus.NO_AUTH)));
};
