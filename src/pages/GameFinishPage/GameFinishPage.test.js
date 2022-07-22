/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { screen, render, waitForElementToBeRemoved } from "@testing-library/react";
 import userEvent from "@testing-library/user-event";
 import GameFinishPage from '.'
 import { BrowserRouter as Router } from 'react-router-dom'
 import { waitFor, fireEvent } from '@testing-library/react' 
 import {Provider} from 'react-redux';
 import {store} from '../../redux/store'

 
 
 
 
 
 describe("GameFinishPage", () => {
     beforeEach(() => {
         render(
            
        <Provider store={store}>
            <Router>
            <GameFinishPage/>
            </Router>
        </Provider>
       
         )
     })

    //  test("Displays the appropriate heading", () => {

    //     throw
    //             // const heading = screen.getByRole("heading");
    //             // expect(heading.textContent).toBe("The winner is ...")
    //         })

    })
