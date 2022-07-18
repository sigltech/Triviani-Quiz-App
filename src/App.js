import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { OnlineGamePage, GameFinishPage, GamePage, LeaderboardPage } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path="/online" element={<OnlineGamePage />} />
          <Route path="/finish" element={<GameFinishPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
