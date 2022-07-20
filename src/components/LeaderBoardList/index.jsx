import React from "react";
import { useSelector} from "react-redux";

export default function LeaderBoardList() {

    const {
        player
      } = useSelector((state) => state);


    return (
        <div className="leaderboard-list">
            <h1>Top 10 Scores</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map through user scores here */}
                        {player.map((player, index) => {
                            let counter = 0;
                            return (
                                <tr key={index}>
                                    <td>{counter + 1}</td>
                                    <td >{player.name}</td>
                                    <td>{player.score}</td>
                                </tr>
                            )
                        })}
                        {/* <td>1</td>
                        <td>{player[1].name}</td>
                        <td>{player[1].score}</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}
