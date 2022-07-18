import React, { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { useSelector, useDispatch } from 'react-redux';

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

  return (
    <div className="gamePage">
      <div className="countDown">
        <h1> COUNTDOWN GOES HERE </h1>
      </div>

      <div>
        <h1>Question</h1>
      </div>

      <div className="answers">
        {/* <button onClick={getApi}> press for questions </button> */}
        {/* <div className="answerCard"> <h4> answer1</h4> </div>
                <div className="answerCard"> <h4> answer2</h4> </div>
                <div className="answerCard"> <h4> answer3</h4> </div>
                <div className="answerCard"> <h4> answer4</h4> </div> */}
      </div>

      <div>
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
  );
}

export default GamePage;
