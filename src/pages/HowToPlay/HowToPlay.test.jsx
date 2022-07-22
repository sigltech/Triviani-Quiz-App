/**
 * @jest-environment jsdom
 */
import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../store';
import HowToPlay from '.';
import { BrowserRouter as Router } from 'react-router-dom';

describe('How to play page', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <HowToPlay />
        </Router>
      </Provider>
    );
  });

  test('displays correct text value on button', () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('Displays the passed text', () => {
    const button = screen.getByRole('button');
    expect(button.textContent).toBe('Understood!');
  });

  test("It should display an appropriate list", ()=> {
    const list = screen.getAllByRole("list")[0];
    expect(list.textContent).toBe("Enter your usernameAdd players max 4Select a Quiz CategorySelect a Quiz DifficultySelect a Quiz typeSelect Amount of QuestionsStart Quiz")
  })

  test("It should display an appropriate list", ()=> {
    const list = screen.getAllByRole("list")[1];
    expect(list.textContent).toBe("....Enter your usernameAdd players max 4Select a Quiz CategorySelect a Quiz DifficultySelect a Quiz typeSelect Amount of QuestionsStart Quiz")
  })

  test("It should display an appropriate header", ()=> {
    const heading = screen.getAllByRole("heading")[0];
    expect(heading.textContent).toBe("How To Play")
  })

  test("It should display an appropriate header", ()=> {
    const heading = screen.getAllByRole("heading")[1];
    expect(heading.textContent).toBe("Starting a local game")
  })

  test("It should display an appropriate header", ()=> {
    const heading = screen.getAllByRole("heading")[2];
    expect(heading.textContent).toBe("Starting a online game")
  })

  test("Button brings user to hpme page", async () => {
    const button = screen.getByRole("button");
    await fireEvent.click(button);
    expect(window.location.href).toContain("http://localhost/")
})

});
