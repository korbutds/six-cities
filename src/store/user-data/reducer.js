import {AuthorizationStatus} from "../../const";
import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, setUserAvatar, setUserInfo, setUserName} from "./actions";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  login: ``,
  userAvatar: ``
};

const userData = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setUserName, (state, action) => {
    state.login = action.payload;
  });
  builder.addCase(setUserAvatar, (state, action) => {
    state.userAvatar = action.payload;
  });
  builder.addCase(setUserInfo, (state, action) => {
    state.userAvatar = action.payload.userAvatar;
    state.login = action.payload.userName;
  });
});

export default userData;
