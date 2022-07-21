import React from "react";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../store";
import DarkModeToggle from ".";

describe("Dark Mode Toggle Testing", () => {
  beforeEach(() => {
    render(<Provider store={store}>{<DarkModeToggle />}</Provider>);
  });

  it("Dark Mode Toggle is Present on the screen", () => {
    const darkmode = screen.getByRole("darkmode");
    expect(darkmode).toBeInTheDocument();
  });

  it("Toggles Dark Mode", () => {
    const darkmode = screen.getByRole("darkmode");

    expect(darkmode.checked).toEqual(false);

    fireEvent.click(darkmode);

    expect(darkmode.checked).toEqual(true);
  });
});
