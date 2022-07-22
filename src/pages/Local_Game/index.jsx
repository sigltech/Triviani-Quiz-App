
import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { SelectInputs } from "../../components";
import useAxios from "../../hooks/useAxios";
import "./style.css";
import { LoadingPage, AddUsername } from "../../components/index.jsx";
import { useSelector, useDispatch } from "react-redux";
import { handlePlayersChange, handleUsernameChange, handleLocalPlayersChange } from '../../redux/action';

const LocalGame = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [numPlayers, setNumPlayers] = useState();

  const [user, setUser] = useState([{name: "", score: 0}]);
  const [inputValue, setInputValue] = useState([{name: "", score: 0}]);
  const [submitValue, setSubmitValue] = useState([{name: "", score: 0}]);
  const [playerData, setPlayerData] = useState([]);

  const {players, player, username, local_players} = useSelector((state) => state);
  
  const { response, Loading, error } = useAxios({ url: "api_category.php" });

  if (Loading) {
    return <LoadingPage />;
  }
  if (error) {
    return error;
  }

  const difficultyOpt = [
    { id: 'easy', name: 'Easy' },
    { id: 'medium', name: 'Medium' },
    { id: 'hard', name: 'Hard' },
  ];

  const typeOpt = [
    { id: 'multiple', name: 'Multiple Choice' },
    { id: 'boolean', name: 'True/False' },
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
    // let counter = players;
    // const usernameDiv = document.querySelector("#addUsername");
    // const newPlayerInput = document.createElement("input");
    // newPlayerInput.setAttribute("type", "text");
    // newPlayerInput.setAttribute("id", `player${counter + 1}`);
    // newPlayerInput.setAttribute("class", `player`);

    // newPlayerInput.setAttribute("placeholder", "Player Name");
    // newPlayerInput.setAttribute("key", counter+1);
    // newPlayerInput.setAttribute("required", "true");
    // newPlayerInput.setAttribute("label", counter);
    // let append = usernameDiv.appendChild(newPlayerInput);
    // newPlayerInput.addEventListener("change", handleInputChange);
    // dispatch(handlePlayersChange(players + 1));
    // return (
    //   {append}
    // )
    setPlayerData([...playerData, {name: `${document.querySelector(`#player1`).value}`, score: 0}]);
    dispatch(handleLocalPlayersChange(playerData));
    console.log(`input value is: ${JSON.stringify(playerData)}`);
    document.querySelector(`#player1`).value = "";
    
  }

  const handleRemovePlayerInput = () => {
    // const usernameDiv = document.querySelector("#addUsername");
    // const removePlayerInput = usernameDiv.querySelector("input");
    // console.log(removePlayerInput);
    // // usernameDiv.removeChild(usernameDiv.querySelector(":nth-last-child(2)"))
    // if(players <= 1 || usernameDiv.childNodes.length <= 1) {
    //   alert("You must have at least one player")
    //   dispatch(handlePlayersChange(players));
    // } else if(players >= 2) {
    //   dispatch(handlePlayersChange(players - 1));

    //   if(usernameDiv.lastChild === HTMLSpanElement) {
    //     usernameDiv.removeChild(usernameDiv.removeChild(usernameDiv.querySelector(":nth-last-child(2)")))
    //   } else {
    //   usernameDiv.removeChild(usernameDiv.lastChild);
    //   console.log(`count number is: ${usernameDiv.childNodes}`)
    //   }
    // }

    console.log(playerData)
    console.log(`player data is: ${JSON.stringify(playerData)}`)

  } 


  const handleInputChange = (e) => { 
    if(e.target.value !== undefined) {
    const target = document.querySelector(`#player1`).value;
    console.log(target);
    dispatch(handleUsernameChange(target));

    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitValue(inputValue.name);

    console.log(playerData)
    // dispatch(handlePlayerChange([...player, inputValue]));
    // console.log(`Player information: ${JSON.stringify(player)}`)
    dispatch(handleUsernameChange(inputValue.name));
    dispatch(handleLocalPlayersChange(playerData));
    console.log(`Player information: ${JSON.stringify(username)}`)
    return (
      navigate("/game")
      )
    };

  return (
    <div className="">
      <div className="Localgame-container">
          <h1>Local Game</h1>
        <div className="localgame-inputs-container">
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
          <div className="localgame-inputs-header">
            <div className="header-btns">
            {/* <button onClick={handleRemovePlayerInput}>Remove Player</button> */}
            <div className="player-list-container">
                <h3 style={{textDecoration: 'underline'}}>Players</h3>
              <div className="players-list" style={{border: '2px solid black'}}>
              {playerData.map((player, index) => {
              return (
                <div className="game-players" key={index}>
                <p>{index+1}</p>
                <p>{player.name}</p>
                <span onClick={handleRemovePlayerInput} className="deleteBtn">x</span>
                </div>
              )
            })}
              </div>
              </div>
              <div className="username-inputs-container">
          <AddUsername user={user} setUser={setUser} handleInputChange={handleInputChange}/>
          <button id="add-username-btn" onClick={handleNewPlayerInput}>add Player</button>
          </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LocalGame;
