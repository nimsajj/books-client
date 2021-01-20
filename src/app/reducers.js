import { combineReducers } from "redux";

import booksReducer from "../features/books/redux/reducer";

export default combineReducers({
  books: booksReducer,
});
