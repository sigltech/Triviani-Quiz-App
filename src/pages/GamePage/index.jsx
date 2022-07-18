import React, {useState} from "react";
import axios from 'axios';

function GamePage({}) {
    
    const [answers, setAnswers] = useState('');

    async function getApi() {
        try {
            const result = await axios.get (
             `https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple`   
            );
            setAnswers(result.data)
            console.log(result.data);
        }catch (err) {
            console.log(err)
        }
    }
    

    return(
        <div className="gamePage">

            <div className="countDown">
                <h1> COUNTDOWN GOES HERE </h1>
            </div>

            <div>
                
                <h1>Question</h1>
            </div>

            <div className="answers">
            <button onClick={getApi}> press for questions </button>
                {/* <div className="answerCard"> <h4> answer1</h4> </div>
                <div className="answerCard"> <h4> answer2</h4> </div>
                <div className="answerCard"> <h4> answer3</h4> </div>
                <div className="answerCard"> <h4> answer4</h4> </div> */}
            </div>

            <div>
                <button style={{color: '#000'}} onClick={() => {console.log('clicked')}}>Test socket connection</button>
            </div>


        </div>
    )
}

export default GamePage;
