import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { OnlineGamePage, GameFinishPage, GamePage, IndexPage, LeaderboardPage, LocalGame } from './pages';
import Layout from './Layouts';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/online" element={<OnlineGamePage />} />
          <Route path="/finish" element={<GameFinishPage />} />
          <Route path="/localgame" element={<LocalGame />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
