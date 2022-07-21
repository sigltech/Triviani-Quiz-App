<<<<<<< HEAD
const RenderQuestions = ({ response, questionIndex, handleAnswerSelect }) => {
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

      <div onClick={handleAnswerSelect} id="correct" className="answerCard">
        {response.results[questionIndex].correct_answer}
      </div>
    </>
  );
};

=======
import { useEffect, useState } from 'react';

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
              dangerouslySetInnerHTML={{ __html: answer }}
            ></div>
          );
        })}

      {/* <div onClick={handleAnswerSelect} className="answerCard">
        {response.results[questionIndex].correct_answer}
      </div> */}
    </>
  );
};

>>>>>>> 2c92e2ee72a39bb5524b7a4c8e2f2ece60155a88
export default RenderQuestions;
