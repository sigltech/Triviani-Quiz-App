import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { OnlineGamePage, GameFinishPage, GamePage, IndexPage } from './pages';
import Layout from './Layouts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/online" element={<OnlineGamePage />} />
          <Route path="/finish" element={<GameFinishPage />} />
          <Route path="/game" element={<GamePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
