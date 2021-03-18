import {getCurrentCityOffers} from "./selectors";
import {SortTypes} from "../../const";

describe(`Current city sorted offers should work correctly`, () => {
  const initialState = [
    {
      city: {
        name: `Paris`,
      },
      rating: 2,
      price: 100,
      id: 4
    },
    {
      city: {
        name: `Amsterdam`,
      },
      rating: 1,
      price: 300,
      id: 2
    },
    {
      city: {
        name: `Amsterdam`,
      },
      rating: 8,
      price: 50,
      id: 3
    },
    {
      city: {
        name: `Paris`,
      },
      rating: 4,
      price: 169,
      id: 1
    },
    {
      city: {
        name: `Paris`,
      },
      rating: 12,
      price: 1,
      id: 5
    },
  ];
  it(`Popular sort should work currectly`, () => {
    const currentCity = `Paris`;
    const sortType = SortTypes.POPULAR;
    const expectedValue = [
      {
        city: {
          name: `Paris`,
        },
        rating: 4,
        price: 169,
        id: 1
      },
      {
        city: {
          name: `Paris`,
        },
        rating: 2,
        price: 100,
        id: 4
      },
      {
        city: {
          name: `Paris`,
        },
        rating: 12,
        price: 1,
        id: 5
      },
    ];

    expect(getCurrentCityOffers(initialState, currentCity, sortType)).toEqual(expectedValue);
  });
  it(`Price to low sort should work currectly`, () => {
    const currentCity = `Paris`;
    const sortType = SortTypes.PRICE_HIGH_TO_LOW;
    const expectedValue = [
      {
        city: {
          name: `Paris`,
        },
        rating: 4,
        price: 169,
        id: 1
      },
      {
        city: {
          name: `Paris`,
        },
        rating: 2,
        price: 100,
        id: 4
      },
      {
        city: {
          name: `Paris`,
        },
        rating: 12,
        price: 1,
        id: 5
      },
    ];

    expect(getCurrentCityOffers(initialState, currentCity, sortType)).toEqual(expectedValue);
  });
  it(`Price to high sort should work currectly`, () => {
    const currentCity = `Paris`;
    const sortType = SortTypes.PRICE_LOW_TO_HIGH;
    const expectedValue = [
      {
        city: {
          name: `Paris`,
        },
        rating: 12,
        price: 1,
        id: 5
      },
      {
        city: {
          name: `Paris`,
        },
        rating: 2,
        price: 100,
        id: 4
      },
      {
        city: {
          name: `Paris`,
        },
        rating: 4,
        price: 169,
        id: 1
      },
    ];

    expect(getCurrentCityOffers(initialState, currentCity, sortType)).toEqual(expectedValue);
  });
  it(`Top rated sort should work currectly`, () => {
    const currentCity = `Paris`;
    const sortType = SortTypes.TOP_RATED_FIRST;
    const expectedValue = [
      {
        city: {
          name: `Paris`,
        },
        rating: 12,
        price: 1,
        id: 5
      },
      {
        city: {
          name: `Paris`,
        },
        rating: 4,
        price: 169,
        id: 1
      },
      {
        city: {
          name: `Paris`,
        },
        rating: 2,
        price: 100,
        id: 4
      },
    ];

    expect(getCurrentCityOffers(initialState, currentCity, sortType)).toEqual(expectedValue);
  });
});
