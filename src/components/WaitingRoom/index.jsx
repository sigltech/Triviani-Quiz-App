import useAxios from "../../hooks/useAxios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SelectInputs } from "../../components";
import { io } from 'socket.io-client';
const socket = io.connect('http://localhost:8000');

export default function WaitingRoom() {
    const navigate = useNavigate(); 

    const {online_room, online_username} = useSelector(state => state);


    const { response, Loading, error } = useAxios({ url: "api_category.php" });

    const handleStartGame = () => {
        socket.emit('join_room', online_room);
        socket.emit('join_server', online_username);
        navigate(`/onlinegame/${online_room}`);
    }

    const difficultyOpt = [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" },
      ];
    
      const typeOpt = [
        { id: "multiple", name: "Multiple Choice" },
        { id: "boolean", name: "True/False" },
      ];
    
      const numberOpt = [
        { id: 5, name: 5 },
        { id: 10, name: 10 },
        { id: 15, name: 15 },
        { id: 20, name: 20 },
        { id: 25, name: 25 },
        { id: 30, name: 30 },
      ];

    return (
        <div>
            <ul className="players-lobby">

            </ul>
            <form onSubmit={handleStartGame}>
            <SelectInputs
              label="Category"
              apiData={response && response.trivia_categories}
            />
            <SelectInputs label="Difficulty" apiData={difficultyOpt} />
            <SelectInputs label="Game Type" apiData={typeOpt} />
            <SelectInputs label="Number Of Questions" apiData={numberOpt} />
            {/* <SelectInputs label="Number Of Players" apiData={PlayerOpt} /> */}
            <input id="startgame-btn" type="submit" value="Start" />
            </form>
        </div>
    )
}
