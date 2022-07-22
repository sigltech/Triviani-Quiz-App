// import React, { useEffect } from "react";
// import { WaitingRoom } from "../../components";
// import './style.css'
// import { io } from 'socket.io-client';
// const socket = io.connect('http://localhost:8000');


// export default function WaitingRoomPage() {

//     useEffect(() => {
//         function HandleJoinRoom() {
//             socket.emit('join_room', player);
//             socket.on('message', (data) => {
//                 console.log(data);
//             }
//             );
//         }
//         // join room with socket.emit
//         socket.emit('join_room', roomNumber);
//     }, [])


//     return (
//         <div>
//             <div className="form-container">
//                 <div className="waitingroom-container">
//                 <h1>Waiting Room</h1>
//                     <WaitingRoom />
//                 </div>
//             </div>
//         </div>
//     );
// }
