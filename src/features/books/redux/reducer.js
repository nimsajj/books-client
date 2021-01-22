import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  FETCH_BOOKS_BY_GENRE_REQUEST,
  FETCH_BOOKS_BY_GENRE_SUCCESS,
  FETCH_BOOKS_BY_GENRE_ERROR,
} from "./action";

const initialState = {
  status: "initial",
  error: null,
  data: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
    case FETCH_BOOKS_BY_GENRE_REQUEST:
      return {
        ...state,
        status: "loading",
      };
    case FETCH_BOOKS_SUCCESS:
    case FETCH_BOOKS_BY_GENRE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        status: "succeeded",
      };
    case FETCH_BOOKS_ERROR:
    case FETCH_BOOKS_BY_GENRE_ERROR:
      return { ...state, error: action.payload, status: "error" };
    default:
      return state;
  }
};

export default booksReducer;
