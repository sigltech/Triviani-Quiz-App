import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import{ useNavigate } from 'react-router';
import Countdown from 'react-countdown';
import { LoadingPage, RenderQuestions } from '../../components/index.jsx';
import { handleScoreChange } from '../../redux/action';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from '../../redux/store';


function GamePage() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(11000);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const {
    question_category,
    question_difficulty,
    question_type,
    questionsAmount,
    players,
    intScore,
    player,
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
    player
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
        navigate('/finish')
    } else if (questionIndex < response.results.length -1) {
      setQuestionIndex(questionIndex + 1);
    }
  };  

  return (
    <>
      <div className="gamePage">
        <div className="game-container">
          <div className="gamepage-container">

            <div className="countDown">

              <Countdown
                intervalDelay={1000}
                precision={3}
                date={Date.now() + timer} 
                renderer={renderer}
                key={questionIndex}
                autoStart={true}
                onComplete={() => {questionIndex === response.results.length -2 ? navigate('/finish') : setQuestionIndex(questionIndex + 1)}}
              />

            </div>

            <div>
              <h1>{response.results[questionIndex].question}</h1>
              <h3><span id='playerNum'>{player[1].name}</span>'s turn</h3>
            </div>

            <div className="answers">
              <RenderQuestions  response={response} questionIndex={questionIndex} handleAnswerSelect={handleAnswerSelect}/>
            </div>

            <div>
              <h3>
                {' '}
                Score: {intScore} / {response.results.length}
              </h3>
              {/* <button
                style={{ color: "#000" }}
                onClick={() => {
                  console.log("clicked");
                }}
              >
                Test socket connection
              </button> */}
            </div>

            <button onClick={getData}>get data test</button>
          </div>
          </div>
      </div>
    </>
  );
}

export default GamePage;
