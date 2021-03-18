import MockAdapter from 'axios-mock-adapter';
import {APIRoutePathes, AuthorizationStatus, FetchStatus} from "../../const";
import {createApi} from "../../services/api";
import {ActionType} from "../action";
import {checkAuth} from '../api-actions';
import userData from "./user-data";

const api = createApi(() => {});

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


describe(`Async user data operations work correctly`, () => {
  it(`Should make a correct API call to ./login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoutePathes.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_INFO,
          payload: {
            userName: undefined,
            userAvatar: undefined
          }
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.CHANGE_FETCH_STATUS,
          payload: FetchStatus.DONE
        });
      });
  });
});
