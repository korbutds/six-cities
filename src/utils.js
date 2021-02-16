// import {Offers} from './mocks/offers.js';
export const getPlacesCities = (places) => {
  return [...new Set(places.reduce((acc, place) => {
    return [...acc, place[`city`][`location`]];
  }, []))];
};

export const getCitySortedPlaces = (places) => {
  const cities = getPlacesCities(places);

  return cities.reduce((acc, city) => {
    const placesInCurrentCity = places.filter((place) => {
      return place[`city`][`location`] === city;
    });
    const currentObject = {
      [city]: placesInCurrentCity
    };
    return Object.assign(
        acc,
        currentObject,
    );
  }, {});
};

export const makeFirstLetterUC = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

