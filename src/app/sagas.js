import { all } from "redux-saga/effects";

import booksSaga from "../features/books/redux/saga";
import genresSaga from "../features/genres/redux/saga";

export default function* rootSaga() {
  // https://redux-saga.js.org/docs/advanced/RootSaga.html
  yield all([booksSaga(), genresSaga()]);
}
