import React, {useEffect, useState} from "react";
import './style.css'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { handleOnlineUsernameChange, handleOnlineRoomChange } from "../../redux/action";
import { io } from 'socket.io-client';
const socket = io.connect('http://localhost:8000');

export default function OnlineGamePage() {
    const [room, setRoom] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        online_username,
        online_player,
        player,    
      } = useSelector((state) => state);

    const randomRoomNumber = () => {
        const randomNum = Math.floor(Math.random() * 1000);
        const target = document.getElementById('socket-roomNumber');
        target.textContent = randomNum;
        dispatch(handleOnlineRoomChange(target.textContent));
        console.log(target.textContent)
    }

    const copytoClipboard = (e) => {
        console.log(e.target.textContent)
        navigator.clipboard.writeText(e.target.textContent)
        .then(() => {
            alert('Copied to clipboard');
        })
    }

    const handleOnlineSubmit = (e) => {
        e.preventDefault();
        const target = document.getElementById('room-number');
        const roomNumber = target.value;
        setRoom(roomNumber);
        const onlineUser = document.getElementById('username');
        console.log(onlineUser.value)
        dispatch(handleOnlineUsernameChange(onlineUser.value));
        console.log(roomNumber);

        // join room with socket.emit
        socket.emit('join_room', roomNumber);
        navigate(`/onlinegame/waitingroom`);
    }

    // useEffect(() => {
    //     socket.emit('join_room', player);
    //     socket.on('message', (data) => {
    //       console.log(data);
    //     }
    //     );
    // },[])

    return (
        <>
            <h1 className="online-game-heading">Online Game</h1>

                <div className="form-container">
                    <div className="create-game-container">
                        <>
                            <div className="create-game-button">
                                <button onClick={randomRoomNumber}>Create Game</button>
                                <h2 onClick={copytoClipboard} id="socket-roomNumber"> </h2>
                            </div>
                        <form onSubmit={handleOnlineSubmit} className="join-game-container">
                            <label htmlFor="room-number">Type in Room number</label>
                            <input type="number" name="room-number" id="room-number" />
                            <label htmlFor="username">Type in your username</label>
                            <input type="text" name="username" id="username" />
                            <button type="submit">Join game</button>
                        </form>
                        </>
                    </div>
                </div>
            {/* <div className="Online-game-start-container">
                <form className="flex-col-center">
                    <label htmlFor="">Number Of Players</label>
                    <select aria-label="players-selector">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    <label htmlFor="">Number Of Questions</label>
                    <div className="questions-selection">
                        <div>
                            <label htmlFor="10-questions">10</label>
                            <input id="10-questions" type="radio" name="questions-number" value="10" checked />
                        </div>

                        <div>
                            <label htmlFor="15-questions">15</label>
                            <input id="15-questions" type="radio" name="questions-number" value="15" />
                        </div>

                        <div>
                            <label htmlFor="20-questions">20</label>
                            <input id="20-questions" type="radio" name="questions-number" value="20" />
                        </div>
                    </div>

                </form>
            </div> */}
        </>
    )
}
