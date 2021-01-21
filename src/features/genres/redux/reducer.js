import {
  FETCH_GENRES_REQUEST,
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_ERROR,
} from "./action";

const initialState = {
  status: "initial",
  error: null,
  data: [],
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES_REQUEST:
      return {
        ...state,
        status: "loading",
      };
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        status: "succeeded",
      };
    case FETCH_GENRES_ERROR:
      return { ...state, error: action.payload, status: "error" };
    default:
      return state;
  }
};

export default genresReducer;
