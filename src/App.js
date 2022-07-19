import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { OnlineGamePage, GameFinishPage, GamePage, IndexPage, LeaderboardPage, LocalGame } from './pages';
import { io } from 'socket.io-client';

import Layout from './Layouts';
const socket = io.connect('http://localhost:8000')

function App() {
  const [message, setMessage] = useState('')
  const [room, setRoom] = useState("")
  const [messageReceived, setMessageReceived] = useState('')

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room)
    }
  }

  const sendMessage = () => {
    socket.emit("send_message", { message, room })
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message)
    })
  }, [socket])
  return (
    <div className="App">

      <input onChange={(event) => {
        setMessage(event.target.value)
      }} placeholder='Room Number....' />
      <button onClick={joinRoom}>Join Room</button>

      <input onChange={(event) => {
        setRoom(event.target.value)
      }} placeholder='message' />

      <button onClick={sendMessage}>send message</button>
      <h1>Message:</h1>
      {messageReceived}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/online" element={<OnlineGamePage />} />
          <Route path="/finish" element={<GameFinishPage />} />
          <Route path="/localgame" element={<LocalGame />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/localgame" element={<LocalGame />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
