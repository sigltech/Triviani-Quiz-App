import React from "react";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../store";
import GameCard from ".";

describe("gameCard ", () => {
  beforeEach(() => {
    render(<Provider store={store}>{<GameCard />}</Provider>);
  });

  it("Header is present", () => {
    const header = screen.getByRole("header");
    expect(header).toBeInTheDocument();
  });
});
