export const ActionType = {
  CHANGE_LOCATION: `/changeLocation`,
};

export const setLocation = (location) => ({type: ActionType.CHANGE_LOCATION, payload: location});


