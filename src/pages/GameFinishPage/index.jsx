import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LeaderBoardChart, LeaderBoardList } from "../../components";
import './style.css';
import { useSelector } from 'react-redux';
import axios from 'axios'; // Import axios

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

      console.log(player)

      useEffect(() => {
      function pushToBackend(player) {
        const url = 'https://triviani-data-server-js.herokuapp.com/data';
        const data = player;
        const options = {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
        axios.post(url, data, options)
        }

        pushToBackend(player)
      },[]);

      const handleWinner = () => {
        const winner = players.find(player => player.score === intScore);
        console.log(winner);
        return winner.username;
      }

    return(
        <div className="gameFinish">

            <div className="winner">
                <h1> The winner is {handleWinner}</h1>
            </div>
            
            <div className="gameover"> 
                <h2>GAME OVER </h2>
            </div>
 
            <div className="scores">
                <p> {player[0].name}'s score: <span>{player[0].score}</span></p>
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
