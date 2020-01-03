import { Reducer } from "redux";
import { repositoriesState, RepositoriesTypes } from "./types";

const INITIAL_STATE: repositoriesState = {
  data: [{ id: 1, name: "teste" }],
  error: false,
  loading: false
};

const reducer: Reducer<repositoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true };

    case RepositoriesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      };

    case RepositoriesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };

    default:
      return { ...state };
  }
};
export default reducer;
