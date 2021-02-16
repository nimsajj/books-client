import { REQUEST_STATUS } from "../../../utils";
import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  FETCH_SINGLE_BOOK_REQUEST,
  FETCH_SINGLE_BOOK_SUCCESS,
  FETCH_SINGLE_BOOK_ERROR,
  FETCH_BOOKS_BY_GENRE_REQUEST,
  FETCH_BOOKS_BY_GENRE_SUCCESS,
  FETCH_BOOKS_BY_GENRE_ERROR,
} from "./action";

const { initial, loading, succeeded, error } = REQUEST_STATUS;

const initialState = {
  status: initial,
  error: null,
  data: [],
};

const setFormatDateTimeToPublished = ({ publishedAt }) => {
  const locale = "fr-FR";
  const date = new Date(publishedAt).toLocaleDateString(locale);
  const time = new Date(publishedAt).toLocaleTimeString(locale);

  return `${date} ${time}`;
};

const setBooksStatus = (books, status = initial) =>
  books.map((book) => {
    return {
      ...book,
      publishedAt: setFormatDateTimeToPublished(book),
      status: status,
    };
  });

const setSingleBookStatus = (books, bookId, status) =>
  books.map((book) =>
    book.id === Number(bookId) ? { ...book, status: status } : book
  );

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
    case FETCH_BOOKS_BY_GENRE_REQUEST:
      return {
        ...state,
        status: loading,
      };
    case FETCH_BOOKS_SUCCESS:
    case FETCH_BOOKS_BY_GENRE_SUCCESS:
      return {
        ...state,
        data: setBooksStatus(action.payload),
        status: succeeded,
      };
    case FETCH_BOOKS_ERROR:
    case FETCH_BOOKS_BY_GENRE_ERROR:
      return { ...state, error: action.payload, status: error };
    case FETCH_SINGLE_BOOK_REQUEST:
      return {
        ...state,
        data: setSingleBookStatus(state.data, action.payload, loading),
      };
    case FETCH_SINGLE_BOOK_SUCCESS:
      return {
        ...state,
        data: setSingleBookStatus(state.data, action.payload.id, succeeded),
      };
    case FETCH_SINGLE_BOOK_ERROR:
      return {
        ...state,
        data: setSingleBookStatus(state.data, action.payload, error),
      };
    default:
      return state;
  }
};

export default booksReducer;
