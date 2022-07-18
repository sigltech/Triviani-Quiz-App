import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import Countdown from 'react-countdown';
import { LoadingPage } from '../../components/index.jsx';
import { handleScoreChange } from '../../redux/action';

function GamePage() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(10000);

  const {
    question_category,
    question_difficulty,
    question_type,
    questionsAmount,
    players,
    intScore,
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  function scoreChange() {
    switch(intScore) {
      case 'Score Change':
      dispatch(handleScoreChange(intScore + 1))
    }
  }

  let apiUrl = `api.php?amount=${questionsAmount}`;

  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }

  const { response, error, loading } = useAxios({ url: apiUrl });

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
    if (
      e.target.textContent === response.results[questionIndex].correct_answer
    ) {
      console.log(
        `Correct answer is ${response.results[questionIndex].correct_answer}`
      );
      dispatch(handleScoreChange(intScore + 1));
      console.log(intScore);
      setQuestionIndex(questionIndex + 1);
      setTimer(10000);
    } else {
      console.log(`That's is the wrong answer`);

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
    <div className="gamePage">
      <div className="game-container">
        <div className="gamepage-container">
          <div className="countDown">
            <Countdown date={Date.now() + timer} renderer={renderer} />
          </div>

          <div>
            <h1>{response.results[questionIndex].question}</h1>
          </div>

          <button /*onClick={getApi}*/> press for questions </button>

          <div className="answers">
            <RenderQuestions />

            {/* <div className="answerCard"> <h4> answer1</h4> </div>
                        <div className="answerCard"> <h4> answer2</h4> </div>
                        <div className="answerCard"> <h4> answer3</h4> </div>
                        <div className="answerCard"> <h4> answer4</h4> </div> */}
          </div>

          <div>
            <h3>
              {' '}
              Score: {intScore} / {response.results.length}
            </h3>
            <button
              style={{ color: '#000' }}
              onClick={() => {
                console.log('clicked');
              }}
            >
              Test socket connection
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
