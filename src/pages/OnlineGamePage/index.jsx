import React from "react";
import './style.css'

export default function OnlineGamePage() {

    return (
        <>
            <h1 className="online-game-heading">Online Game</h1>

                <div className="form-container">
                    <div className="create-game-container">
                    <div className="create-game-button">
                        <button>Create Game</button>
                    </div>
                    <form className="join-game-container">
                        <label htmlFor="room-number">Type in Room number</label>
                        <input type="number" name="room-number" id="room-number" />
                        <label htmlFor="username">Type in your username</label>
                        <input type="number" name="username" id="username" />
                        <button type="submit">Join game</button>
                    </form>
                </div>
            </div>
            {/* <div className="Online-game-start-container">
                <form className="flex-col-center">
                    <label htmlFor="">Number Of Players</label>
                    <select aria-label="players-selector">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    <label htmlFor="">Number Of Questions</label>
                    <div className="questions-selection">
                        <div>
                            <label htmlFor="10-questions">10</label>
                            <input id="10-questions" type="radio" name="questions-number" value="10" checked />
                        </div>

                        <div>
                            <label htmlFor="15-questions">15</label>
                            <input id="15-questions" type="radio" name="questions-number" value="15" />
                        </div>

                        <div>
                            <label htmlFor="20-questions">20</label>
                            <input id="20-questions" type="radio" name="questions-number" value="20" />
                        </div>
                    </div>

                </form>
            </div> */}
        </>
    )
}
