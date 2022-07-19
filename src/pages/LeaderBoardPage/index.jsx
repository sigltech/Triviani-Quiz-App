import React from 'react';
import { LeaderBoardChart, LeaderBoardList } from '../../components';
import './style.css';

const LeaderBoardPage = () => {
  return (
    <>
      <h1>Leader Board</h1>

      <div className='leaderboard-container'>
        <LeaderBoardChart />
        <LeaderBoardList />
      </div>
    </>
  );
};

export default LeaderBoardPage;
