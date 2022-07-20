import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { SelectInputs } from "../../components";
import useAxios from "../../hooks/useAxios";
import "./style.css";
import { LoadingPage, AddUsername } from "../../components/index.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  handleAmountChange,
  handleCategoryChange,
  handleDifficultyChange,
  handleTypeChange,
  handlePlayersChange,
} from '../../redux/action';

const LocalGame = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [numPlayers, setNumPlayers] = useState();

  const {players, player} = useSelector((state) => state.players);
  
  
  const { response, Loading, error } = useAxios({ url: "api_category.php" });

  if (Loading) {
    return <LoadingPage />;
  }
  if (error) {
    return error;
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

  const PlayerOpt = [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    return (
      navigate("/game")
    )
  };

  console.log(`count number is: ${players}`)
  const handleNewPlayerInput = () => {
    let counter = players;
    const usernameDiv = document.querySelector(".addUsername");
    const newPlayerInput = document.createElement("input");
    newPlayerInput.setAttribute("type", "text");
    newPlayerInput.setAttribute("placeholder", "Player Name");
    newPlayerInput.setAttribute("required", "true");
    newPlayerInput.setAttribute("label", counter);
    let append = usernameDiv.appendChild(newPlayerInput);
    dispatch(handlePlayersChange(players + 1));
    return (
      {append}
    )
  }

  const handleRemovePlayerInput = () => {
    const usernameDiv = document.querySelector(".addUsername");
    const removePlayerInput = document.querySelector(".addUsername input");

    if(players <= 1) {
      alert("You must have at least one player")
    } else {
      usernameDiv.removeChild(removePlayerInput);
      dispatch(handlePlayersChange(players - 1));
    }
  }

  return (
    <div className="">
      <div className="Localgame-container">
        <div className="localgame-inputs-container">
          <div className="localgame-inputs-header">
            <h1>Local Game</h1>
            <div className="header-btns">
            <button onClick={handleNewPlayerInput}>add Player</button>
            <button onClick={handleRemovePlayerInput}>Remove Player</button>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
          <AddUsername handleNewPlayerInput={handleNewPlayerInput} handleRemovePlayerInput={handleRemovePlayerInput} setNumPlayers={setNumPlayers} numPlayers={numPlayers}/>
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
      </div>
    </div>
  );
};

export default LocalGame;
