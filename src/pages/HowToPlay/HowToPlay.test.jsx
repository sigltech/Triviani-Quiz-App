/**
 * @jest-environment jsdom
 */
import React from 'react';
import { screen, render } from '@testing-library/react';
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
});
