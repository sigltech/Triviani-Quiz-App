import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import{ useNavigate } from 'react-router';
import { LoadingPage, OnlineGameComp } from '../../components/';
import { handlePlayerChange, handleScoreChange } from '../../redux/action';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from '../../redux/store';
import { io } from 'socket.io-client';
const socket = io.connect('http://localhost:8000');


function OnlineGame() {

  const [questionIndex, setQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(11000);
  const [waitingForPlayer, setWaitingForPlayer] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    username,
    question_category,
    question_difficulty,
    question_type,
    questionsAmount,
    players,
    intScore,
    player,
    online_room
  } = useSelector((state) => state);


  let apiUrl = `api.php?amount=${questionsAmount}`;
  
  console.log(questionsAmount);
  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }
  console.log(apiUrl);

  const { response, error, loading } = useAxios({ url: apiUrl });
  
  if (loading) {
    return <LoadingPage />;
  }

  console.log(
    question_category,
    question_difficulty,
    question_type,
    questionsAmount,
    players,
    player,
    username,
  );
  console.log(questionIndex, response.results.length)
  console.log(response.results[questionIndex].question)

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      setQuestionIndex(questionIndex + 1);
      // completed = false;
      return <span>Time's up!</span>;
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  
 const saveData = async () => {
    try {
      await AsyncStorage.setItem('@save_score', intScore)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  const getData = async () => {
    try {
      const storedDate = await AsyncStorage.getItem('@save_score')
      console.log(storedDate)
    }  catch (e) {
      alert('Failed to get the data from the storage')
    }
  }




  
  const handleAnswerSelect = (e) => {
    if (e.target.textContent === response.results[questionIndex].correct_answer && questionIndex < response.results.length -1) {

      console.log(`Correct answer is ${response.results[questionIndex].correct_answer}`);
      dispatch(handleScoreChange(intScore + 1));
      // console.log(intScore);
      setQuestionIndex(questionIndex + 1);
      // console.log(questionIndex, response.results.length);
    } else if (questionIndex >= response.results.length -1 ){
        saveData();
        dispatch(handlePlayerChange([...player, {name: username, score: intScore}]));
        console.log(player);
        dispatch(handleScoreChange(0));
        navigate('/finish')
    } else if (questionIndex < response.results.length -1) {
      setQuestionIndex(questionIndex + 1);
    }
  }; 

  const startSubmit = (e) => {
    e.preventDefault();
    setWaitingForPlayer(!waitingForPlayer);
  }

  return (
    <>
      <OnlineGameComp 
          getData={getData} 
          startSubmit={startSubmit}
          waitingForPlayer={waitingForPlayer}
          setWaitingForPlayer={setWaitingForPlayer}
          questionIndex={questionIndex}
          setQuestionIndex={setQuestionIndex}
          timer={timer}
          setTimer={setTimer}
          renderer={renderer}
          response={response}
          handleAnswerSelect={handleAnswerSelect}
          />
    </>
  );
}

export default OnlineGame;
