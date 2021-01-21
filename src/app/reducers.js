import { combineReducers } from "redux";

import booksReducer from "../features/books/redux/reducer";
import genresReducer from "../features/genres/redux/reducer";

export default combineReducers({
  books: booksReducer,
  genres: genresReducer,
});
