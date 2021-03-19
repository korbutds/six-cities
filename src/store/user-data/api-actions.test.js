import MockAdapter from "axios-mock-adapter";
import {APIRoutePathes, AuthorizationStatus, FetchStatus, RoutePathes} from "../../const";
import {createApi} from "../../services/api";
import {ActionType} from "./actions";
import {checkAuth, login, logout} from "./api-actions";

const api = createApi(() => {});

describe(`Async user data operations work correctly`, () => {
  it(`Should make a correct API call to ./login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoutePathes.LOGIN)
      .reply(200, {
        'email': `Vasya`,
        'avatar_url': `https://www.avatar.com`,
        'mock': `mock`
      });

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_INFO,
          payload: {
            userName: `Vasya`,
            userAvatar: `https://www.avatar.com`
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

  it(`Should make a correct API call to ./login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginLoader = login(`Vasya`, `password`);

    apiMock
      .onPost(APIRoutePathes.LOGIN)
      .reply(200, {
        'email': `Vasya`,
        'avatar_url': `https://www.avatar.com`,
      });

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_INFO,
          payload: {
            userName: `Vasya`,
            userAvatar: `https://www.avatar.com`
          }
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT,
          payload: RoutePathes.MAIN_SCREEN
        });
      });
  });
  it(`Should make a correct API call to ./logout`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    apiMock
      .onGet(APIRoutePathes.LOGOUT)
      .reply(200, []);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_USERNAME,
          payload: ``
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER_AVATAR,
          payload: ``
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.NO_AUTH
        });
      });
  });
});
