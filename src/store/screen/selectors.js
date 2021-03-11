import {NameSpace} from "../root-reducer";

export const getLocation = (state) => state[NameSpace.SCREEN].location;
export const getSortType = (state) => state[NameSpace.SCREEN].sort;
