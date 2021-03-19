import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  CHANGE_USERNAME: `user/changeName`,
  SET_USER_AVATAR: `user/changeAvatar`,
  SET_USER_INFO: `user/changeUserInfo`,
  CHANGE_FETCH_STATUS: `data/changeFetchStatus`
};

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status
}));

export const setUserName = createAction(ActionType.CHANGE_USERNAME, (userName) => ({
  payload: userName
}));

export const setUserInfo = createAction(ActionType.SET_USER_INFO, (userName, userAvatar) => ({
  payload: {
    userName,
    userAvatar
  }
}));

export const setUserAvatar = createAction(ActionType.SET_USER_AVATAR, (url) => ({
  payload: url
}));

export const redirect = createAction(ActionType.REDIRECT, (url) => ({
  payload: url
}));

export const changeFetchStatus = createAction(ActionType.CHANGE_FETCH_STATUS, (fetchStatus) => ({
  payload: fetchStatus
}));
