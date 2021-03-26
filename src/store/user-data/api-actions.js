import {APIRoutePath, AuthorizationStatus, FetchStatus, RoutePath} from "../../const";
import * as actions from "./actions";

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutePath.LOGIN)
  .then((response) => dispatch(actions.setUserInfo(response.data.email, response.data[`avatar_url`])))
  .then(() => dispatch(actions.requireAuthorization(AuthorizationStatus.AUTH)))
  .then(() => dispatch(actions.changeFetchStatus(FetchStatus.DONE)))
  .catch(() => dispatch(actions.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoutePath.LOGIN, {email, password})
    .then((response) => dispatch(actions.setUserInfo(response.data.email, response.data[`avatar_url`])))
    .then(() => dispatch(actions.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(actions.redirect(RoutePath.MAIN_SCREEN)))
);

export const logout = () => (dispatch, _state, api) => (
  api.get(APIRoutePath.LOGOUT)
    .then(() => dispatch(actions.setUserName(``)))
    .then(() => dispatch(actions.setUserAvatar(``)))
    .then(() => dispatch(actions.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);
