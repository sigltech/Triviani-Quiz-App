import React from "react";
import Countdown from 'react-countdown';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {LoadingPage, RenderOnlineQuestions, WaitingRoom } from "../../components";

export default function OnlineGameComp({waitingForPlayer,setWaitingForPlayer, questionIndex, setQuestionIndex, startSubmit, getData, timer, setTimer, renderer, response,handleAnswerSelect }) {

    const navigate = useNavigate();

    const {
        username,
        online_username,
        intScore
    } = useSelector(state => state);

  return (
    <div className="gamePage">
        <div className="game-container">
          <div className="gamepage-container">

    {waitingForPlayer ? <WaitingRoom response={response} startSubmit={startSubmit} /> : 
            <>
            <div className="countDown">

              <Countdown
                intervalDelay={1000}
                precision={3}
                date={Date.now() + timer} 
                renderer={renderer}
                key={questionIndex}
                autoStart={true}
                onComplete={() => {
                  questionIndex === response.results.length -2 ? navigate('/finish') : setQuestionIndex(questionIndex + 1)
                }}
              />

            </div>

            <div>
              <h1>{response.results[questionIndex].question}</h1>
              <h3><span id='playerNum'>{username}</span>'s turn</h3>
            </div>

            <div className="answers">
              <RenderOnlineQuestions  response={response} questionIndex={questionIndex} handleAnswerSelect={handleAnswerSelect}/>
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
            </> }
            {/* <button onClick={getData}>get data test</button> */}
          </div>
          </div>
      </div>
  )
}
