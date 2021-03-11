import {NameSpace} from "../root-reducer";

export const getOffersCards = (state) => state[NameSpace.DATA].cards;
export const getCardsLoadedStatus = (state) => state[NameSpace.DATA].isCardsLoaded;


