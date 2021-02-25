import {CityList, SortTypes} from "./const";

export const getCitiesNames = (places) => {
  return places.reduce((acc, place) => {
    return [...acc, place.city.name];
  }, []);
};

export const getCityFiltredPlaces = (places) => {

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

const sortPlacesPopular = (placeA, placeB) => {
  return placeA.id - placeB.id;
};

const sortPlacesPriceToLow = (placeA, placeB) => {
  return placeB.price - placeA.price;
};

const sortPlacesPriceToHight = (placeA, placeB) => {
  return placeA.price - placeB.price;
};

const sortPlacesRate = (placeA, placeB) => {
  return placeA.rating - placeB.rating;
};

export const getSortedPlaces = (places, sortType) => {
  switch (sortType) {
    case SortTypes.POPULAR:
      return places.sort(sortPlacesPopular);
    case SortTypes.PRICE_HIGH_TO_LOW:
      return places.sort(sortPlacesPriceToLow);
    case SortTypes.PRICE_LOW_TO_HIGH:
      return places.sort(sortPlacesPriceToHight);
    case SortTypes.TOP_RATED_FIRST:
      return places.sort(sortPlacesRate);
  }

  return places;
};

export const makeFirstLetterUC = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};
