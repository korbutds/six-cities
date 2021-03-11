import {combineReducers} from 'redux';
import offersData from './offers-data/offers-data';
import screen from './screen/screen';
import userData from './user-data/user-data';

export const NameSpace = {
  DATA: `DATA`,
  SCREEN: `SCREEN`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: offersData,
  [NameSpace.SCREEN]: screen,
  [NameSpace.USER]: userData,
});
