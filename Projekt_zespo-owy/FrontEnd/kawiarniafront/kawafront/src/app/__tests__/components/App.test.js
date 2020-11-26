import React from "react";
import App from "../../../App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../store/store";

test("full app rendering", () => {
  const history = createMemoryHistory();
  const { container } = render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
  expect(container.firstChild.className).toEqual("login");
});

