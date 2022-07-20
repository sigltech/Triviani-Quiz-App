import React from "react";
import reactDom from "react-dom/client"
import { Provider } from "react-redux";
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import { persistor, store } from './redux/store';
import { PersistGate } from "redux-persist/integration/react";

const root = reactDom.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>
);
