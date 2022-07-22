import { useEffect, useState } from 'react';
import { decode } from 'html-entities';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const RenderQuestions = ({ response, questionIndex, handleAnswerSelect }) => {
  const [options, setOptions] = useState([]);
  const corr_answer = response.results[questionIndex].correct_answer;

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      let correct = question.correct_answer;

      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        correct
      );
      console.log(`correct answers`, correct);
      setOptions(answers);
    }
  }, [response, questionIndex]);
  console.log(corr_answer);
  return (
    <>
      {options &&
        options.map((answer, index, value) => {
          if (answer === corr_answer) {
            value = 'correct';
          }
          console.log(`in return block`, answer, index);
          return (
            <div
              type="button"
              onClick={handleAnswerSelect}
              className="answerCard"
              value={value}
              key={index}
            >
              {decode(answer)}
            </div>
          );
        })}

      {/* <div onClick={handleAnswerSelect} className="answerCard">
        {response.results[questionIndex].correct_answer}
      </div> */}
    </>
  );
};

export default RenderQuestions;
