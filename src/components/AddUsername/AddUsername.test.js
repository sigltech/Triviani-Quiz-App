import React from "react";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../store";
import AddUsername from ".";

describe("Dark Mode Toggle Testing", () => {
  beforeEach(() => {
    render(<Provider store={store}>{<AddUsername />}</Provider>);
  });
  it("Checking username input is present", () => {
    const AddUsername = screen.getByRole("AddUsername");
    expect(AddUsername).toBeInTheDocument();
  });
  it("Checking correct placeholder", () => {
    const UsernamePlaceholder = screen.getByPlaceholderText("Player Name");
    expect(UsernamePlaceholder).toBeInTheDocument();
  });
});
