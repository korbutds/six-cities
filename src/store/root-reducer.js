import {combineReducers} from 'redux';
import offersData from './offers-data/offers-data';
import screen from './screen/screen';
import userData from './user-data/user-data';
import currentOfferData from './current-offer-data/current-offer-data';

export const NameSpace = {
  DATA: `DATA`,
  SCREEN: `SCREEN`,
  USER: `USER`,
  CURRENT_OFFER: `CURRENT_OFFER`
};

export default combineReducers({
  [NameSpace.DATA]: offersData,
  [NameSpace.SCREEN]: screen,
  [NameSpace.USER]: userData,
  [NameSpace.CURRENT_OFFER]: currentOfferData
});
