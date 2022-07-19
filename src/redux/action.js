/* istanbul ignore file */
// import axios from "axios";
// import React, { useState } from 'react';

import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_AMOUNT,
  CHANGE_TYPE,
  CHANGE_SCORE,
  CHANGE_USERNAME,
  CHANGE_PLAYERS,
  CHANGE_PLAYER,
} from "./actionTypes";

export const handleCategoryChange = (payload) => ({
  type: CHANGE_CATEGORY,
  payload,
});

export const handleDifficultyChange = (payload) => ({
  type: CHANGE_DIFFICULTY,
  payload,
});

export const handleTypeChange = (payload) => ({
  type: CHANGE_TYPE,
  payload,
});

export const handleAmountChange = (payload) => ({
  type: CHANGE_AMOUNT,
  payload,
});

export const handleScoreChange = (payload) => ({
  type: CHANGE_SCORE,
  payload,
});

export const handleUsernameChange = (payload) => ({
  type: CHANGE_USERNAME,
  payload,
});

export const handlePlayersChange = (payload) => ({
  type: CHANGE_PLAYERS,
  payload,
});

export const handlePlayerChange = (payload) => ({
  type: CHANGE_PLAYER,
  payload,
});

// export const fetchData = () => {
//     const [answers, setAnswers] = useState('');

//     return (dispatch) => {
//       dispatch(fetchDataRequest)
//       try {
//       const result = await axios.get('https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple')
//       setAnswers(result.data)
//       console.log(result.data);
//       dispatch(fetchDataSuccess(answers))
//       } catch (err) {
//           console.log(err)
//           dispatch(fetchDataFailure(err))
//       }
//     };
//   };
