import { call, put, takeEvery } from "redux-saga/effects";
import { bookApi, genreApi } from "../../../api/endpoints";
import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  FETCH_BOOKS_BY_GENRE_REQUEST,
  FETCH_BOOKS_BY_GENRE_SUCCESS,
  FETCH_BOOKS_BY_GENRE_ERROR,
} from "./action";

function* fetchBooks() {
  try {
    const { data } = yield call(bookApi.getAll);

    yield put({
      type: FETCH_BOOKS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: FETCH_BOOKS_ERROR,
      payload: error.message,
    });
  }
}

function* fetchBooksByGenre(action) {
  try {
    const { data } = yield call(genreApi.getBooks, action.payload);

    yield put({
      type: FETCH_BOOKS_BY_GENRE_SUCCESS,
      payload: data.books,
    });
  } catch (error) {
    yield put({
      type: FETCH_BOOKS_BY_GENRE_ERROR,
      payload: error.message,
    });
  }
}

function* booksSaga() {
  yield takeEvery(FETCH_BOOKS_REQUEST, fetchBooks);
  yield takeEvery(FETCH_BOOKS_BY_GENRE_REQUEST, fetchBooksByGenre);
}

export default booksSaga;
