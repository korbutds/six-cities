import {NameSpace} from "../root-reducer";

export const getOffersCards = (state) => state[NameSpace.DATA].cards;
export const getCardsLoadedStatus = (state) => state[NameSpace.DATA].isCardsLoaded;
export const getCurrentOfferData = (state) => state[NameSpace.DATA].currentOffer;
export const getCurrentOfferLoadedStatus = (state) => state[NameSpace.DATA].isOfferLoaded;
export const getNearPlacesCards = (state) => state[NameSpace.DATA].nearPlaces;
export const getNearPlacesCardsLoadedStatus = (state) => state[NameSpace.DATA].isNearPlacesLoaded;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getCommentsLoadedStatus = (state) => state[NameSpace.DATA].isCommentsLoaded;

