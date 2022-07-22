// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { socket } from "../app";
// import { setRoom } from "../actions/game";
// import { Navigate } from "react-router-dom";
// import Fade from "react-reveal/Fade";

// export function CreateGamePage() {
//   const [room, setRoom] = useState("");
//   const [category, setCategory] = useState("0");
//   const [difficulty, setDifficulty] = useState("any");
//   const [questionCount, setQuestionCount] = useState("5");
//   const [error, setError] = useState("");

//   const dispatch = useDispatch();

//   const type = useSelector((state) => state.type);
//   const categories = useSelector((state) => state.categories);

//   const onRoomChange = (e) => {
//     const room = e.target.value;
//     setRoom({ room });
//   };

//   const onCategoryChange = (e) => {
//     const category = e.target.value;
//     setCategory({ category });
//   };

//   const onDifficultyChange = (e) => {
//     const difficulty = e.target.value;
//     setDifficulty({ difficulty });
//   };

//   const onCountChange = (e) => {
//     const questionCount = e.target.value;
//     setQuestionCount({ questionCount });
//   };

//   //unsure if this dispatch is correct

//   const submitForm = (e) => {
//     e.preventDefault();
//     dispatch({ type: "SET_ROOM" });
//     const config = {
//       room: room,
//       category: category,
//       difficulty: difficulty,
//       questionCount: questionCount,
//     };
//     //console.log("submitting")
//     socket.emit("createRoom", config, (res) => {
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
//             <h1 className={"box-layout__title"}>Create New Game</h1>
//             {error && <p className="form__error">{error}</p>}
//             <input
//               type="text"
//               placeholder="Room Name"
//               autoFocus
//               value={room}
//               onChange={onRoomChange}
//               className="text-input"
//             />
//             <select
//               className="select"
//               value={category}
//               onChange={onCategoryChange}
//             >
//               <option key={"0"} value={"0"}>
//                 Any Categories
//               </option>
//               {categories.map((category) => {
//                 return (
//                   <option key={category.id} value={category.id}>
//                     {category.name}
//                   </option>
//                 );
//               })}
//             </select>
//             <select
//               className="select"
//               value={difficulty}
//               onChange={onDifficultyChange}
//             >
//               <option key={"any"} value={"any"}>
//                 Any Difficulty
//               </option>
//               <option key="easy" value="easy">
//                 Easy
//               </option>
//               <option key="medium" value="medium">
//                 Medium
//               </option>
//               <option key="hard" value="hard">
//                 Hard
//               </option>
//             </select>
//             <select
//               className="select"
//               value={questionCount}
//               onChange={onCountChange}
//             >
//               <option key="5" value="5">
//                 5 Questions
//               </option>
//               <option key="10" value="10">
//                 10 Questions
//               </option>
//               <option key="15" value="15">
//                 15 Questions
//               </option>
//             </select>
//             <button className="button">Create</button>
//           </form>
//         </Fade>
//       </div>
//     </div>
//   );
// }

// export default CreateGamePage;
