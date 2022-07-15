import React from "react";
import reactDom from "react-dom/client"
import { Provider } from "react-redux";
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store.js'

const root = reactDom.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
