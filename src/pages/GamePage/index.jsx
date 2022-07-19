import React, { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import{ useNavigate } from 'react-router';
import Countdown from 'react-countdown';
import { LoadingPage } from '../../components/index.jsx';
import { handleScoreChange } from '../../redux/action';

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
  } = useSelector((state) => state);
  
  let apiUrl = `api.php?amount=${questionsAmount}`;
  const { response, error, loading } = useAxios({ url: apiUrl });


  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }


  if (loading) {
    return <LoadingPage />;
  }
  console.log(response);
  console.log(
    question_category,
    question_difficulty,
    question_type,
    questionsAmount,
    players
  );
  console.log(questionIndex, response.results.length)

  //   const [answers, setAnswers] = useState('');

  //   async function getApi() {
  //     try {
  //       const result = await axios.get(
  //         `https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple`
  //       );
  //       setAnswers(result.data);
  //       console.log(result.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      setQuestionIndex(questionIndex + 1);
      completed = false;
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

  
  const handleAnswerSelect = (e) => {
    // console.log(e.target.textContent);
    // console.log(response.results[0].correct_answer);
    // console.log(typeof response.results[0].correct_answer);
    // console.log(typeof e.target.textContent);
    if (e.target.textContent === response.results[questionIndex].correct_answer) {

      console.log(`Correct answer is ${response.results[questionIndex].correct_answer}`);
      dispatch(handleScoreChange(intScore + 1));
      // console.log(intScore);
      setQuestionIndex(questionIndex + 1);
      // console.log(questionIndex, response.results.length);
    } 
    // else if (questionIndex >= response.results.length ){
    //     navigate('/finish')
    // }
    else {
      setQuestionIndex(questionIndex + 1);
    //   console.log(`That's is the wrong answer`);

    }
  };

  const RenderQuestions = () => {
    return (
      <>
        {response.results[questionIndex].incorrect_answers.map(
          (answer, index) => {
            return (
              <div
                type="button"
                onClick={handleAnswerSelect}
                className="answerCard"
                key={index}
                dangerouslySetInnerHTML={{ __html: answer }}
              ></div>
            );
          }
        )}

        <div onClick={handleAnswerSelect} className="answerCard">
          {response.results[questionIndex].correct_answer}
        </div>
      </>
    );
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
                onComplete={() => {questionIndex === response.results.length ? navigate('/finish') : setQuestionIndex(questionIndex + 1)}}
              />

            </div>

            <div>
              <h1>{response.results[questionIndex].question}</h1>
            </div>

            <div className="answers">
              <RenderQuestions />
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
          </div>
          </div>
      </div>
    </>
  );
}

export default GamePage;
