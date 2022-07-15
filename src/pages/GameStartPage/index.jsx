import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameStart = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Triviani</h1>
      <h3>5 time Award winning QUIZ around the 🌍 </h3>

      <div>
        <img src="../logo.svg" alt="" />
        <button onClick={() => navigate()}>Local</button>
        <button onClick={() => navigate()}>Online</button>
      </div>

      <button onClick={() => navigate()}>Help</button>
      <button onClick={() => navigate()}>LeaderBoard</button>
    </>
  );
};

export default GameStart;
