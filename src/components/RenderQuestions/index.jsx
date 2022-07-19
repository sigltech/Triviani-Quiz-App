
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

        <div onClick={handleAnswerSelect} className="answerCard">
          {response.results[questionIndex].correct_answer}
        </div>
      </>
    );
  };

  export default RenderQuestions;
