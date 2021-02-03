import React from "react";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import configureMockStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";

import renderer from "react-test-renderer";

const mockStore = configureMockStore([createSagaMiddleware()]);

const render = (children, initialState) => {
  const store = mockStore(initialState);

  return renderer.create(
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
};

export { render };
