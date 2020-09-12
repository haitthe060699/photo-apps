import { STATS } from "../constants";

const statReducer = (state = {}, action) => {
  switch (action.type) {
    case STATS.LOAD:
      return {
        ...state,
        [action.id]: {
          isLoading: true,
          views: null,
          error: false,
        },
      };
    case STATS.LOAD_SUCCESS:
      return {
        ...state,
        [action.id]: {
          isLoading: false,
          views: action.views,
          error: false,
        },
      };
    case STATS.LOAD_FAIL:
      return {
        ...state,
        [action.id]: {
          isLoading: false,
          views: null,
          error: true,
        },
      };
    default:
      return state;
  }
};

export default statReducer;
