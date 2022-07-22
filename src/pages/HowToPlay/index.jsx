import React from 'react';
import { useNavigate } from 'react-router-dom';

const HowToPlay = () => {
  const navigate = useNavigate();
  return (
    <div className="index-container">
      <div className="homepage-container">
        {/* template */}

        <h1>How To Play</h1>

        <h3>Starting a local game</h3>

        <ol role="list">
          <li>Enter your username</li>
          <li>Add players max 4</li>
          <li>Select a Quiz Category</li>
          <li>Select a Quiz Difficulty</li>
          <li>Select a Quiz type</li>
          <li>Select Amount of Questions</li>
          <li>Start Quiz</li>
        </ol>

        <h3>Starting a online game</h3>
        <ol>
          <li>....</li>
          <li>Enter your username</li>
          <li>Add players max 4</li>
          <li>Select a Quiz Category</li>
          <li>Select a Quiz Difficulty</li>
          <li>Select a Quiz type</li>
          <li>Select Amount of Questions</li>
          <li>Start Quiz</li>
        </ol>
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          Understood!
        </button>
      </div>
    </div>
  );
};

export default HowToPlay;
