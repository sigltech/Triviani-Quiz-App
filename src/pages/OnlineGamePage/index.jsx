import React from "react";
import './style.css'

export default function OnlineGamePage() {
    return (
        <>
        <div className="Online-game-start-container">
            <h1>Play an Game</h1>
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
        </div>
        </>
    )
}
