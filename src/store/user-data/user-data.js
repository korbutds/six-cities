import {AuthorizationStatus} from "../../const";
import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, setUserAvatar, setUserName} from "../action";

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
});

export default userData;
