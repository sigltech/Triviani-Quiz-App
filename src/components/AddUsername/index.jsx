import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { handlePlayerChange } from "../../redux/action";

export default function AddUsername({user, setUser, inputValue, setInputValue}) {




    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

  return (
    <div id="addUsername" className="addUsername">
        <input onChange={handleInputChange} id='player1' required type="text" placeholder="Player Name"/>
    </div>
  );
}
