import React from "react";

function GamePage() {
    return(
        <div className="gamePage">

            <div className="countDown">
                <h1> COUNTDOWN GOES HERE </h1>
            </div>

            <div>
                <h1>Question</h1>
            </div>

            <div className="answers">
                <div className="answerCard"> <h4> answer1</h4> </div>
                <div className="answerCard"> <h4> answer1</h4> </div>
                <div className="answerCard"> <h4> answer1</h4> </div>
                <div className="answerCard"> <h4> answer1</h4> </div>
            </div>

            <div>
                <button style={{color: '#000'}} onClick={() => {console.log('clicked')}}>Test socket connection</button>
            </div>


        </div>
    )
}

export default GamePage;
