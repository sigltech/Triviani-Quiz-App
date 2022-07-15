import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { OnlineGamePage } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path="/" element={<OnlineGamePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
