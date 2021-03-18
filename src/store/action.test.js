import {AuthorizationStatus} from '../const';
import {
  setLocation,
  getCards,
  getCurrentOffer,
  getNearPlaces,
  requireAuthorization,
  setUserName,
  setUserInfo,
  setUserAvatar,
  redirect,
  getComments,
  changeFavoriteStatus,
  changeFetchStatus,
  clearCurrentOffer,
  ActionType
} from './action';

describe(`Acton creators work correctly`, () => {
  it(`Action creator for change location work correctly`, () => {
    const location = `Minsk`;
    const expectedAction = {
      type: ActionType.CHANGE_LOCATION,
      payload: location
    };

    expect(setLocation(location)).toEqual(expectedAction);
  });

  it(`Action creator for add cards work correctly`, () => {
    const cards = [`foo`, `bar`];
    const expectedAction = {
      type: ActionType.LOAD_CARDS,
      payload: cards,
    };

    expect(getCards(cards)).toEqual(expectedAction);
  });

  it(`Action creator for add card work correctly`, () => {
    const card = {
      foo: `foo`,
      bar: `bar`
    };
    const expectedAction = {
      type: ActionType.LOAD_CURRENT_OFFER,
      payload: card,
    };

    expect(getCurrentOffer(card)).toEqual(expectedAction);
  });

  it(`Action creator for add near places work correctly`, () => {
    const nearCards = [`foo`, `bar`];
    const expectedAction = {
      type: ActionType.LOAD_NEAR_PLACES,
      payload: nearCards,
    };

    expect(getNearPlaces(nearCards)).toEqual(expectedAction);
  });

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

  it(`Action creater for get comments work correctly`, () => {
    const comments = [`foo`, `bar`];
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: comments
    };

    expect(getComments(comments)).toEqual(expectedAction);
  });

  it(`Action creater for change favorite status work correctly`, () => {
    const card = {
      foo: `foo`,
      bar: `bar`
    };
    const expectedAction = {
      type: ActionType.CHANGE_FAVORITE_STATUS,
      payload: card
    };

    expect(changeFavoriteStatus(card)).toEqual(expectedAction);
  });

  it(`Action creater for change fetch status work correctly`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
    };

    expect(changeFetchStatus()).toEqual(expectedAction);
  });

  it(`Action creater for clear current offer work correctly`, () => {
    const expectedAction = {
      type: ActionType.CLEAR_CURRENT_STATE,
    };

    expect(clearCurrentOffer()).toEqual(expectedAction);
  });
});

