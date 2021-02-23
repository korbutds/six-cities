import {CityList} from "./const";

export const getCitySortedPlaces = (places) => {

  const cities = Object.keys(CityList);

  return cities.reduce((acc, city) => {
    const placesInCurrentCity = places.filter((place) => {
      return place[`city`][`name`] === city;
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
