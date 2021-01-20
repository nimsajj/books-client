import { call, put, takeEvery } from "redux-saga/effects";
import { bookApi } from "../../../api/endpoints";
import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
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

function* booksSaga() {
  yield takeEvery(FETCH_BOOKS_REQUEST, fetchBooks);
}

export default booksSaga;
