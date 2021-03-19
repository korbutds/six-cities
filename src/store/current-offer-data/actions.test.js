import {
  getCurrentOffer,
  getNearPlaces,
  getComments,
  changeFavoriteStatus,
  clearCurrentOffer,
  ActionType
} from './actions';

describe(`Acton creators work correctly`, () => {

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

  it(`Action creater for clear current offer work correctly`, () => {
    const expectedAction = {
      type: ActionType.CLEAR_CURRENT_STATE,
    };

    expect(clearCurrentOffer()).toEqual(expectedAction);
  });
});

