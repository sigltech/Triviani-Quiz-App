import React from "react";
import { useNavigate } from "react-router-dom";

import { io } from 'socket.io-client';
const socket = io.connect('http://localhost:8000');

export default function WaitingRoom({room}) {
    const navigate = useNavigate(); 
    const handleStartGame = () => {
        socket.emit('join_room', room);
        navigate(`/onlinegame/${room}`);
    }

    return (
        <div>
            <h1>Waiting Room</h1>
            <ul className="players-lobby">

            </ul>
            <button onClick={handleStartGame}>Start Game</button>
        </div>
    )
}
