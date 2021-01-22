export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR";

export const FETCH_BOOKS_BY_GENRE_REQUEST = "FETCH_BOOKS_BY_GENRE_REQUEST";
export const FETCH_BOOKS_BY_GENRE_SUCCESS = "FETCH_BOOKS_BY_GENRE_SUCCESS";
export const FETCH_BOOKS_BY_GENRE_ERROR = "FETCH_BOOKS_BY_GENRE_ERROR";

export const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
});

export const fetchBooksByGenreRequest = (id) => ({
  type: FETCH_BOOKS_BY_GENRE_REQUEST,
  payload: id,
});
