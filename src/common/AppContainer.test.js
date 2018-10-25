import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "react-testing-library";

import AppContainer from "./AppContainer";
import reducer from "../reducers";

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

afterEach(cleanup);

test("renders initial task and allows a new task to be added", () => {
  const { getByText, getByValue } = renderWithRedux(<AppContainer />);

  // check if initially, one task is there
  expect(getByValue("Task 1")).toBeDefined;

  // allow another task to be added
  fireEvent.click(getByText("Add New Task"));
  expect(getByValue("Task 2")).toBeDefined;
});

test("check calculations for a single task", () => {
  const { getByPlaceholderText } = renderWithRedux(<AppContainer />);

  fireEvent.change(getByPlaceholderText("Best Case"), {
    target: { value: "10" }
  });
  fireEvent.change(getByPlaceholderText("Most Likely"), {
    target: { value: "15" }
  });
  fireEvent.change(getByPlaceholderText("Worst Case"), {
    target: { value: "20" }
  });

  // check if initially, one task is there
  expect(getByPlaceholderText("Estimate").value).toBe("15.00");
});
