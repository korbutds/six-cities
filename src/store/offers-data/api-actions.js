import {APIRoutePathes, FetchStatus} from "../../const";
import * as actions from "./actions";

export const fetchCardsList = () => (dispatch, _getState, api) => (
  api.get(APIRoutePathes.HOTELS)
    .then(({data}) => dispatch(actions.getCards(data)))
);

export const sendFavoriteStatus = (id, favorite) => (dispatch, _state, api) => (
  api.post(`${APIRoutePathes.FAVORITE}/${id}/${favorite}`)
    .then(({data}) => dispatch(actions.changeFavoriteStatus(data)))
    .then(() => dispatch(actions.changeFetchStatus(FetchStatus.DONE)))
    .catch(() => dispatch(actions.changeFetchStatus(FetchStatus.ERROR)))
    .finally(() => setTimeout(() => (dispatch(actions.changeFetchStatus(FetchStatus.PENDING))), 5000))
);
