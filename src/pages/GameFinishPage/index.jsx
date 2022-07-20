import React from "react";
import { useNavigate } from "react-router-dom";
import { LeaderBoardChart, LeaderBoardList } from "../../components";
import './style.css';
import { useSelector } from 'react-redux';

function GameFinishPage() {
    const navigate = useNavigate();

    const {
        question_category,
        question_difficulty,
        question_type,
        questionsAmount,
        players,
        intScore,
        player
      } = useSelector((state) => state);

    return(
        <div className="gameFinish">

            <div className="winner">
                <h1> The winner is ...</h1>
            </div>
            
            <div className="gameover"> 
                <h2>GAME OVER </h2>
            </div>
 
            <div className="scores">
                <p> {player[1].name}'s score: <span>{player[1].score}</span></p>
            </div>

            <div className="leadership chart">
                <LeaderBoardChart />
                <LeaderBoardList />
            </div>

            <button className="reset-btn" onClick={() => navigate('/localgame')}> PLAY AGAIN? </button>
            <button className="home-btn" onClick={() => navigate('/')}> HOME </button>

        </div>
    )
}

export default GameFinishPage;
