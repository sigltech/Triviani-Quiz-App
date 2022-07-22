// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// import { socket } from "../app";
// import Fade from "react-reveal/Fade";
// import Players from "./Players";

// export function LobbyPage() {
//   //Purpose of useSelector is to extract these values from the redux store
//   const type = useSelector((state) => state.type);
//   const players = useSelector((state) => state.players);
//   const room = useSelector((state) => state.game.room);

//   const onStartGame = () => {
//     socket.emit("startGame", undefined, (res) => {
//       if (res.code === "success") {
//         // Error Handling
//       }
//     });
//   };

//   return (
//     <div className="content-container">
//       {this.props.type === "" && <Navigate to="/" />}
//       <Fade>
//         <div>
//           <div className="list-header">
//             <h2 className={"box-layout__title"}>Waiting for players</h2>
//             {players.length > 0 && type === "HOST" && (
//               <Fade>
//                 <button onClick={onStartGame} className="button">
//                   Start Game
//                 </button>
//               </Fade>
//             )}
//             {type === "HOST" && (
//               <h2 className={"box-layout__title"}>
//                 Room Code: <b>{room}</b>
//               </h2>
//             )}
//           </div>
//           {type === "HOST" && <Players players={players} />}
//         </div>
//       </Fade>
//     </div>
//   );
// }

// export default LobbyPage;
