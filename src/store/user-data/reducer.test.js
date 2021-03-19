import {AuthorizationStatus} from "../../const";
import {ActionType} from "./actions";
import userData from "./reducer";

describe(`User data reducer should work correctly`, () => {
  it(`Reducer should change authorization status correctly`, () => {
    const initialState = {
      authorizationStatus: null
    };

    const authorizationStatuseAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    };

    const expectedState = {
      authorizationStatus: AuthorizationStatus.AUTH
    };

    expect(userData(initialState, authorizationStatuseAction)).toEqual(expectedState);
  });

  it(`Reducer should set user avatar correctly`, () => {
    const initialState = {
      userAvatar: ``
    };
    const setUserAvatarAction = {
      type: ActionType.SET_USER_AVATAR,
      payload: `https//www.avatar.com`
    };
    const expectedState = {
      userAvatar: `https//www.avatar.com`
    };

    expect(userData(initialState, setUserAvatarAction)).toEqual(expectedState);
  });

  it(`Reducer should set user name correctly`, () => {
    const initialState = {
      login: ``
    };
    const setUserNameAction = {
      type: ActionType.CHANGE_USERNAME,
      payload: `Vasya`
    };
    const expectedState = {
      login: `Vasya`
    };

    expect(userData(initialState, setUserNameAction)).toEqual(expectedState);
  });

  it(`Reducer should set user info correctly`, () => {
    const initialState = {
      login: ``,
      userAvatar: ``
    };
    const setUserInfoAction = {
      type: ActionType.SET_USER_INFO,
      payload: {
        userName: `Vasya`,
        userAvatar: `https//www.avatar.com`
      }
    };
    const expectedState = {
      login: `Vasya`,
      userAvatar: `https//www.avatar.com`
    };

    expect(userData(initialState, setUserInfoAction)).toEqual(expectedState);
  });
});
