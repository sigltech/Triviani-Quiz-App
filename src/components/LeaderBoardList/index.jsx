import React from "react";
import { useSelector} from "react-redux";

export default function LeaderBoardList() {

    const {
        player,
        online_Player
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
                                    <td>{index += 1}</td>
                                    <td >{player.name ? player.name : online_Player}</td>
                                    <td>{player.score}</td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}
