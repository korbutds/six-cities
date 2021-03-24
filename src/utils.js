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

export const sortPlacesPopular = (placeA, placeB) => (placeA.id - placeB.id);

export const sortPlacesPriceToLow = (placeA, placeB) => (placeB.price - placeA.price);

export const sortPlacesPriceToHight = (placeA, placeB) => (placeA.price - placeB.price);

export const sortPlacesRate = (placeA, placeB) => (placeB.rating - placeA.rating);

export const sortCommentsByTime = (commentA, commentB) => (Date.parse(commentB.rating) - Date.parse(commentA.rating));

export const getSortedPlaces = (places, sortType) => {
  const placesCopy = places.slice();

  switch (sortType) {
    case SortTypes.POPULAR:
      return placesCopy.sort(sortPlacesPopular);
    case SortTypes.PRICE_HIGH_TO_LOW:
      return placesCopy.sort(sortPlacesPriceToLow);
    case SortTypes.PRICE_LOW_TO_HIGH:
      return placesCopy.sort(sortPlacesPriceToHight);
    case SortTypes.TOP_RATED_FIRST:
      return placesCopy.sort(sortPlacesRate);
    default:
      return placesCopy;
  }
};

export const CommentSettings = {
  MIN_SIZE: 50,
  MAX_SIZE: 300,
};

export const makeFirstLetterUC = (str) => (str[0].toUpperCase() + str.slice(1));
