import React, { useEffect, useState } from 'react';

import { io } from 'socket.io-client';

const socket = io.connect('http://localhost:8000');

const SocketExperiment = () => {
  const [message, setMessage] = useState('');
  const [room, setRoom] = useState('');
  const [messageReceived, setMessageReceived] = useState('');

  const joinRoom = () => {
    if (room !== '') {
      console.log(`connected ${room}`);
      socket.emit('join_room', room);
    }
  };

  const sendMessage = () => {
    socket.emit('send_message', { message, room });
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log(data);
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <div>
      <input
        onChange={(event) => {
          setRoom(event.target.value);
        }}
        placeholder="Room Number...."
      />
      <button onClick={joinRoom}>Join Room</button>

      <input
        onChange={(event) => {
          setMessage(event.target.value);
        }}
        placeholder="message"
      />

      <button onClick={sendMessage}>send message</button>
      <h1>Message:</h1>
      {messageReceived}
    </div>
  );
};

export default SocketExperiment;
