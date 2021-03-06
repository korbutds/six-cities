import browserHistory from '../browser-history';
import {ActionType} from '../store/action';

export const redirect = () => (next) => (action) => {
  if (action.type === ActionType.REDIRECT) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
