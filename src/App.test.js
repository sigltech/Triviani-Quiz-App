import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import * as router from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import "@testing-library/jest-dom";

describe("Index", () => {
  test("renders learn react link", () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    const heading = screen.getByText(/Welcome to the Trivia Game/i);
    expect(heading).toBeInTheDocument();
  });
});
