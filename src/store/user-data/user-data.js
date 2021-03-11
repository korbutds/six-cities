import {AuthorizationStatus} from "../../const";
import {ActionType} from "../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  login: ``,
  userAvatar: ``
};

const userData = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };

    case ActionType.CHANGE_USERNAME:
      return {
        ...state,
        login: action.payload
      };

    case ActionType.SET_USER_AVATAR:
      return {
        ...state,
        userAvatar: action.payload
      };

    default:
      return state;
  }
};

export default userData;
