import React from 'react';

const LocalGame = () => {
  return (
    <>
      <h1>Local Game</h1>

      <form action="">
        <label htmlFor="">Number Of Players</label>
        <input type="number" />

        <label htmlFor="">Number Of Questions</label>
        <input type="number" />

        <label htmlFor="Difficulty">Difficulty</label>
        <select>
          <option>....</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <label htmlFor="">set game time </label>
        <select>
          <option>....</option>
          <option value="2min">2min</option>
          <option value="4min">4min</option>
          <option value="6min">6min</option>
        </select>

        <label htmlFor="">Category</label>
        <select>
          <option>....</option>
          <option value="anime">Anime & Manga</option>
          <option value="sports">Sports</option>
          <option value="computers">Computers</option>
        </select>

        <input type="submit" value="Start" />
      </form>
    </>
  );
};

export default LocalGame;
