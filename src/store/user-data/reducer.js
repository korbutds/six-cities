import {AuthorizationStatus} from "../../const";
import {createReducer} from '@reduxjs/toolkit';
import * as actions from "./actions";

export const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  login: ``,
  userAvatar: ``
};

const userData = createReducer(initialState, (builder) => {
  builder.addCase(actions.requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(actions.setUserName, (state, action) => {
    state.login = action.payload;
  });
  builder.addCase(actions.setUserAvatar, (state, action) => {
    state.userAvatar = action.payload;
  });
  builder.addCase(actions.setUserInfo, (state, action) => {
    state.userAvatar = action.payload.userAvatar;
    state.login = action.payload.userName;
  });
});

export default userData;
