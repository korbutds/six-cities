import {
  getCards,
  changeFavoriteStatus,
  changeFetchStatus,
  ActionType
} from './actions';

describe(`Acton creators work correctly`, () => {
  it(`Action creator for add cards work correctly`, () => {
    const cards = [`foo`, `bar`];
    const expectedAction = {
      type: ActionType.LOAD_CARDS,
      payload: cards,
    };

    expect(getCards(cards)).toEqual(expectedAction);
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

});

