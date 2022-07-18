import React, { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import Countdown from "react-countdown";

function GamePage() {
  const {
    question_category,
    question_difficulty,
    question_type,
    questionsAmount,
    players,
  } = useSelector((state) => state);

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
    return <h1>put spinner here</h1>;
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
            return <span>{hours}:{minutes}:{seconds}</span>;
        }
    }

  return (
    <div className="gamePage">
      <div className='game-container'>
                <div className='gamepage-container'>

                    <div className="countDown">
                    <Countdown date={Date.now() + 10000} renderer={renderer} />
                    </div>

                    <div>
                        <h1>Question</h1>
                    </div>

                    <button /*onClick={getApi}*/> press for questions </button>
                    <div className="answers">
                        <div className="answerCard"> <h4> answer1</h4> </div>
                        <div className="answerCard"> <h4> answer2</h4> </div>
                        <div className="answerCard"> <h4> answer3</h4> </div>
                        <div className="answerCard"> <h4> answer4</h4> </div>
                    </div>

                    <div>
                        <button style={{color: '#000'}} onClick={() => {console.log('clicked')}}>Test socket connection</button>
                    </div>

                </div>
            </div>
    </div>
  );
}

export default GamePage;
