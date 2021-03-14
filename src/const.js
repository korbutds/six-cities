export const CitiesInfo = {
  Amsterdam: {
    name: `Amsterdam`,
    coords: {
      lat: 52.38333,
      lng: 4.9,
    },
    zoom: 12
  },
  Paris: {
    name: `Paris`,
    coords: {
      lat: 48.856614,
      lng: 2.3522219
    },
    zoom: 12
  },
  Cologne: {
    name: `Cologne`,
    coords: {
      lat: 50.93333,
      lng: 6.95
    },
    zoom: 12
  },
  Brussels: {
    name: `Brussels`,
    coords: {
      lat: 50.83880,
      lng: 4.37530
    },
    zoom: 12
  },
  Hamburg: {
    name: `Hamburg`,
    coords: {
      lat: 53.55034,
      lng: 10.00065
    },
    zoom: 12
  },
  Dusseldorf: {
    name: `Dusseldorf`,
    coords: {
      lat: 51.22540,
      lng: 6.77631
    },
    zoom: 12
  },
};

export const CityList = {
  Paris: `Paris`,
  Cologne: `Cologne`,
  Brussels: `Brussels`,
  Amsterdam: `Amsterdam`,
  Hamburg: `Hamburg`,
  Dusseldorf: `Dusseldorf`
};

export const SortTypes = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const FetchStatus = {
  DONE: `DONE`,
  SENDING: `SENDING`,
  ERROR: `ERROR`
};

export const Colors = {
  SITE_BLUE: `#4481c3`
};

export const RoutePathes = {
  MAIN_SCREEN: `/`,
  LOGIN_SCREEN: `/login`,
  FAVORITES_SCREEN: `/favorites`,
  OFFER_SCREEN: `/offer/:id`,
  NOT_FOUND: `/404`
};

export const APIRoutePathes = {
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  HOTELS: `/hotels`,
  COMMENTS: `/comments`,
  FAVORITE: `/favorite`
};

export const CLICK_TIMEOUT = 1000;

export const RatingTitles = [`perfect`, `good`, `not bad`, `badly`, `terribly`];
