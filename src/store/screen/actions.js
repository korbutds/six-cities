import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_LOCATION: `screen/changeLocation`,
  CHANGE_SORT: `screen/changeSort`,
  REDIRECT: `screen/redirect`,
};

export const setLocation = createAction(ActionType.CHANGE_LOCATION, (location) => ({
  payload: location
}));

export const setSort = createAction(ActionType.CHANGE_SORT, (sort) => ({
  payload: sort
}));

export const redirect = createAction(ActionType.REDIRECT, (url) => ({
  payload: url
}));
