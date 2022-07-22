/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { screen, render, waitForElementToBeRemoved } from "@testing-library/react";
 import userEvent from "@testing-library/user-event";
 import Timer from '.'
 import { BrowserRouter as Router } from 'react-router-dom'
 import { waitFor, fireEvent } from '@testing-library/react' 
 import {Provider} from 'react-redux';
 import {store} from '../../redux/store'

 
 
 
 
 
 describe("Timer", () => {
     beforeEach(() => {
         render(
            <Timer/>
         )
     })

     test("Displays the appropriate heading", () => {
                const heading = screen.getByRole("heading");
                expect(heading.textContent).toBe("CountdownCircleTimerReact Component")
            })

    test("It should display an appropriate paragraph", ()=> {
        const pargarph = screen.getByRole("p");
        expect(pargarph.textContent).toBe("Change component properties in the code filed on the right to try difference functionalities"  )
    })
    })
