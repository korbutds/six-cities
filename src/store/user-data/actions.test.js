import {AuthorizationStatus} from '../../const';
import {
  requireAuthorization,
  setUserName,
  setUserInfo,
  setUserAvatar,
  redirect,
  ActionType
} from './actions';

describe(`User data action creators work correctly`, () => {
  it(`Action creater for require authorisation work correctly`, () => {
    const requiredStatus = AuthorizationStatus.AUTH;
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: requiredStatus
    };

    expect((requireAuthorization(requiredStatus))).toEqual(expectedAction);
  });

  it(`Action creater for set user name work correctly`, () => {
    const userName = `Vasya`;
    const expectedAction = {
      type: ActionType.CHANGE_USERNAME,
      payload: userName
    };

    expect(setUserName(userName)).toEqual(expectedAction);
  });

  it(`Action creater for set user info work corrctly`, () => {
    const userName = `Vasya`;
    const userAvatar = `https//www.avator.com/best_avatar.jpg`;
    const expectedAction = {
      type: ActionType.SET_USER_INFO,
      payload: {
        userName,
        userAvatar
      }
    };

    expect(setUserInfo(userName, userAvatar)).toEqual(expectedAction);
  });

  it(`Action creater for set user avatar work correctly`, () => {
    const userAvatar = `https//www.avator.com/best_avatar.jpg`;
    const expectedAction = {
      type: ActionType.SET_USER_AVATAR,
      payload: userAvatar
    };

    expect(setUserAvatar(userAvatar)).toEqual(expectedAction);
  });

  it(`Action creater for redirect work correctly`, () => {
    const url = `/login`;
    const expectedAction = {
      type: ActionType.REDIRECT,
      payload: url
    };

    expect(redirect(url)).toEqual(expectedAction);
  });
});

