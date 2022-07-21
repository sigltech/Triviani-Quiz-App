// /**
//  * @jest-environment jsdom
//  */

//  import React from "react";
//  import { screen, render, waitForElementToBeRemoved } from "@testing-library/react";
//  import userEvent from "@testing-library/user-event";
//  import LocalGame from '.'
//  import { BrowserRouter as Router } from 'react-router-dom'
//  import { waitFor, fireEvent } from '@testing-library/react' 
//  import { Provider } from 'react-redux';
//  import store from '../../redux/store'
 
//  describe("LocalGame", () => {
//     beforeEach(() => {
//         render(<Provider store={store}>
//                 <LocalGame />
//                </Provider>)
//     })

//     test("Displays the appropriate heading", () => {
//         const heading = screen.getByRole("heading");
//         expect(heading.textContent).toBe("Local Game")
//     })



//  })
