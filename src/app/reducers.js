import { combineReducers } from "redux";

const initialState = "First reducer";

const demoReducer = (state = initialState, action) => {
  return state;
};

export default combineReducers({ demo: demoReducer });
