import {SortTypes} from "../../const";
import {sortPlacesPopular, sortPlacesPriceToHight, sortPlacesPriceToLow, sortPlacesRate} from "../../utils";


export const getCurrentCityOffers = (cardsList, location, sort) => {
  const filtredCards = cardsList.filter((card) => card.city.name === location);
  switch (sort) {
    case SortTypes.POPULAR:
      return filtredCards.sort(sortPlacesPopular);
    case SortTypes.PRICE_HIGH_TO_LOW:
      return filtredCards.sort(sortPlacesPriceToLow);
    case SortTypes.PRICE_LOW_TO_HIGH:
      return filtredCards.sort(sortPlacesPriceToHight);
    case SortTypes.TOP_RATED_FIRST:
      return filtredCards.sort(sortPlacesRate);
    default:
      return filtredCards;
  }
};
