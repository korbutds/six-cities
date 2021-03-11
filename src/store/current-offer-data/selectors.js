import {NameSpace} from "../root-reducer";

export const getCurrentOfferData = (state) => state[NameSpace.CURRENT_OFFER].currentOffer;
export const getCurrentOfferLoadedStatus = (state) => state[NameSpace.CURRENT_OFFER].isOfferLoaded;
export const getNearPlacesCards = (state) => state[NameSpace.CURRENT_OFFER].nearPlaces;
export const getNearPlacesCardsLoadedStatus = (state) => state[NameSpace.CURRENT_OFFER].isNearPlacesLoaded;
export const getComments = (state) => state[NameSpace.CURRENT_OFFER].comments;
export const getCommentsLoadedStatus = (state) => state[NameSpace.CURRENT_OFFER].isCommentsLoaded;
