import React from "react";

export default function LeaderBoardList() {
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
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
