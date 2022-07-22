// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { socket } from "../app";
// import { Navigate } from "react-router-dom";
// import { setRoom } from "../actions/game";
// import { HuePicker } from "react-color";
// import Fade from "react-reveal/Fade";

// export function JoinGamePage() {
//   //setting inital state
//   const [room, setRoom] = useState("");
//   const [name, setName] = useState("");
//   const [colour, setColour] = useState("#00FFF3");
//   const [error, setError] = useState("");

//   //getting data from redux store
//   const type = useSelector((state) => state.type);

//   //dispatch actions to the store
//   const dispatch = useDispatch();

//   const onRoomChange = (e) => {
//     const room = e.target.value;
//     setRoom(room);
//   };

//   const onNameChange = (e) => {
//     const name = e.target.value;
//     setName(name);
//   };

//   const handleChangeComplete = (color) => {
//     setColour(color.hex);
//   };

//   const submitForm = (e) => {
//     e.preventDefault();
//     dispatch({ type: "SET_ROOM" });

//     const config = {
//       name: name,
//       colour: colour,
//       room: room,
//     };

//     socket.emit("joinRoom", config, (res) => {
//       //console.log("res!", res);
//       if (res.code === "success") {
//         setError("");
//         setRoom(room);
//         this.props.history.push("/lobby");
//       } else {
//         setError(res.msg);
//       }
//     });
//   };

//   return (
//     <div className="content-container">
//       {type === "" && <Navigate to="/" />}
//       <div className="box-layout__box">
//         <Fade>
//           <form className="form" onSubmit={submitForm}>
//             <h1 className={"box-layout__title"}>Join Game</h1>
//             {error && <p className="form__error">{error}</p>}

//             <input
//               type="text"
//               placeholder="Room Name"
//               autoFocus
//               value={room}
//               onChange={onRoomChange}
//               className="text-input"
//             />

//             <input
//               type="text"
//               placeholder="User Name"
//               value={name}
//               onChange={onNameChange}
//               className="text-input"
//             />

//             <div className="form__picker">
//               <HuePicker
//                 color={colour}
//                 onChangeComplete={handleChangeComplete}
//               />
//             </div>

//             <button className="button">Join</button>
//           </form>
//         </Fade>
//       </div>
//     </div>
//   );
// }

// export default JoinGamePage;
