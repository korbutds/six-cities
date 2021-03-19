import {combineReducers} from 'redux';
import offersData from './offers-data/reducer';
import screen from './screen/reducer';
import userData from './user-data/reducer';
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
