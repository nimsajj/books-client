export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR";

export const FETCH_SINGLE_BOOK_REQUEST = "FETCH_SINGLE_BOOK_REQUEST";
export const FETCH_SINGLE_BOOK_SUCCESS = "FETCH_SINGLE_BOOK_SUCCESS";
export const FETCH_SINGLE_BOOK_ERROR = "FETCH_SINGLE_BOOK_ERROR";

export const FETCH_BOOKS_BY_GENRE_REQUEST = "FETCH_BOOKS_BY_GENRE_REQUEST";
export const FETCH_BOOKS_BY_GENRE_SUCCESS = "FETCH_BOOKS_BY_GENRE_SUCCESS";
export const FETCH_BOOKS_BY_GENRE_ERROR = "FETCH_BOOKS_BY_GENRE_ERROR";

export const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
});

export const fetchSingleBookRequest = (id) => ({
  type: FETCH_SINGLE_BOOK_REQUEST,
  payload: id,
});

export const fetchBooksByGenreRequest = (id) => ({
  type: FETCH_BOOKS_BY_GENRE_REQUEST,
  payload: id,
});
