import { call, put, takeEvery } from "redux-saga/effects";
import { genreApi } from "../../../api/endpoints";
import {
  FETCH_GENRES_REQUEST,
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_ERROR,
} from "./action";

function* fetchGenres() {
  try {
    const { data } = yield call(genreApi.getAll);
    yield put({
      type: FETCH_GENRES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: FETCH_GENRES_ERROR,
      payload: error.message,
    });
  }
}

function* genresSaga() {
  yield takeEvery(FETCH_GENRES_REQUEST, fetchGenres);
}

export default genresSaga;
