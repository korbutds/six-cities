import {NameSpace} from "../root-reducer";

export const getAuthorisationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getUserLogin = (state) => state[NameSpace.USER].login;
export const getUserAvatar = (state) => state[NameSpace.USER].userAvatar;
