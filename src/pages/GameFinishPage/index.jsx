import React from "react";
import { useNavigate } from "react-router-dom";
import { LeaderBoardChart, LeaderBoardList } from "../../components";
import './style.css';

function GameFinishPage() {
    const navigate = useNavigate();

    return(
        <div className="gameFinish">
            <div className="gameover"> 
                <h3>GAME OVER </h3>
            </div>

            <div className="winner">
                <h1> The winner is ...</h1>
            </div>
            
            <div className="scores">
                <p> Player 1 score ...</p>
                <p> Player 2 score ...</p>
            </div>

            <div className="leadership chart">
                <h1> LEADERSHIP CHART GOES HERE</h1>
                <LeaderBoardChart />

            </div>

            <button className="reset-btn" onClick={() => navigate('/localgame')}> PLAY AGAIN? </button>

        </div>
    )
}

export default GameFinishPage;
