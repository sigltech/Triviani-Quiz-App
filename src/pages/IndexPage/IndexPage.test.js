/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { screen, render, waitForElementToBeRemoved } from "@testing-library/react";
 import userEvent from "@testing-library/user-event";
 import IndexPage from '.'
 import { BrowserRouter as Router } from 'react-router-dom'
 import { waitFor, fireEvent } from '@testing-library/react' 
 import Provider from 'react-redux';
 import store from '../../redux/store'
 import axios from 'axios'
 
 
 
 
 
 describe("indexPage", () => {
     beforeEach(() => {
         render(
      
         <Router>
         {<IndexPage/>} 
         </Router>
       
         )
     })
 
     test("Displays a button that navigates to Local game page", () => {
         const button = screen.getAllByRole("button")[0];
         expect(button).toBeInTheDocument();
     })
 
     test("Displays a button that navigates to Online game page", () => {
         const button = screen.getAllByRole("button")[1];
         expect(button).toBeInTheDocument();
     })
 
     test("Displays a button allows users to message a friend", () => {
         const button = screen.getAllByRole("button")[2];
         expect(button).toBeInTheDocument();
     })
 
 
     test("Button brings user to localgame page", async () => {
         expect(window.location.href).not.toContain("/localgame")
         const button = screen.getAllByRole("button")[0];
         await fireEvent.click(button);
         expect(window.location.href).toContain("/localgame")
     })
 
     test("Button brings user to online page", async () => {
         expect(window.location.href).not.toContain("/onlinegame")
         const button = screen.getAllByRole("button")[1];
         await fireEvent.click(button);
         expect(window.location.href).toContain("/onlinegame")
     })
 
     test("Button brings user to socket page", async () => {
         expect(window.location.href).not.toContain('/socket')
         const button = screen.getAllByRole("button")[2];
         await fireEvent.click(button);
         expect(window.location.href).toContain("/socket")
     })
 
     test("Displays the appropriate number of users for returned data", async () => {
         const mockResponse = [
             {"name":"summm","score":8}, {"name":"devvv","score":4}
         ]
 
         jest.spyOn(axios, 'get').mockResolvedValueOnce({data: mockResponse});
 
         render(<Router>
             <IndexPage />
         </Router>)
 
         // const cards = screen.getAllByRole('figure');
         // expect(cards.length).toBe(2);
 
     })
 })
 