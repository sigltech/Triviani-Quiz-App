import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { SelectInputs } from "../../components";
import useAxios from "../../hooks/useAxios";
import "./style.css";
import { LoadingPage, AddUsername } from "../../components/index.jsx";
import { useSelector, useDispatch } from "react-redux";
import { handlePlayersChange, handlePlayerChange, handleUsernameChange } from '../../redux/action';

const LocalGame = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [numPlayers, setNumPlayers] = useState();
  const [user, setUser] = useState([{name: "", score: 0}]);
  const [inputValue, setInputValue] = useState([{name: "", score: 0}]);
  const [submitValue, setSubmitValue] = useState([{name: "", score: 0}]);

  const {players, player, username} = useSelector((state) => state);
  
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

  // console.log(`count number is: ${players}`)
  // console.log(`Player information: ${Player}`)

  const handleNewPlayerInput = () => {
    let counter = players;
    const usernameDiv = document.querySelector("#addUsername");
    const newPlayerInput = document.createElement("input");
    newPlayerInput.setAttribute("type", "text");
    newPlayerInput.setAttribute("id", `player${counter + 1}`);
    // newPlayerInput.addEventListener("change", handleInputChange);
    newPlayerInput.setAttribute("placeholder", "Player Name");
    newPlayerInput.setAttribute("key", counter);
    newPlayerInput.setAttribute("required", "true");
    newPlayerInput.setAttribute("label", counter);
    let append = usernameDiv.appendChild(newPlayerInput);
    dispatch(handlePlayersChange(players + 1));
    return (
      {append}
    )
  }

  const handleRemovePlayerInput = () => {
    const usernameDiv = document.querySelector("#addUsername");
    const removePlayerInput = usernameDiv.querySelector("input");
    console.log(removePlayerInput);
    // usernameDiv.removeChild(usernameDiv.querySelector(":nth-last-child(2)"))
    if(players <= 1 || usernameDiv.childNodes.length <= 1) {
      alert("You must have at least one player")
      dispatch(handlePlayersChange(players));
    } else if(players >= 2) {
      dispatch(handlePlayersChange(players - 1));
      usernameDiv.removeChild(usernameDiv.removeChild(usernameDiv.querySelector(":nth-last-child(2)")))
      console.log(`count number is: ${usernameDiv.childNodes}`)
    }

  }


  const handleInputChange = (e) => {
    let target = e.target.value;
    console.log(target)
    setInputValue({name: `${target}`, score: 0});
    console.log(`input value is: ${JSON.stringify(inputValue)}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitValue(inputValue.name);
    console.log(submitValue)
    // dispatch(handlePlayerChange([...player, inputValue]));
    // console.log(`Player information: ${JSON.stringify(player)}`)
    dispatch(handleUsernameChange(inputValue.name));
    console.log(`Player information: ${JSON.stringify(username)}`)
    return (
      navigate("/game")
      )
    };



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
          <AddUsername user={user} setUser={setUser} handleInputChange={handleInputChange}/>
          <form onSubmit={handleSubmit}>
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
