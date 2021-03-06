import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import axios from 'axios';

const IndexPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    navigate('/game');
  };

  useEffect(() => {
    async function getData() {
      let serverApi = 'http://localhost:1234';
      await axios.get(serverApi).then((res) => console.log(res.data));
    }
    getData();
  }, []);

  return (
    <>
      <div className="index-container">
        <div className="homepage-container">
          <h1>Welcome to the Trivia Game</h1>
          <div></div> 
          <button onClick={() => navigate('/localgame')}>Local Game</button>
          <button onClick={() => navigate('/onlinegame')}>Online Game</button>
          {/* <button onClick={() => navigate('/socket')}>message friend</button> */}
          <button onClick={() => navigate('/how_to_play')}>How To Play</button>
        </div>
      </div>

      {/* <form onSubmit={handleSubmit}>

      <label htmlFor="username">Username:</label>
      <input type="text" id="username" placeholder="...Enter a username" />
      <input type="submit" id='submit-username-btn' value="Create username" />
    </form> */}

      {/*  
    <h1 id='indexpage-header'>Joey Triviani</h1>

    <form className='indexpage-form'>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value="...Enter a username" />
      <input id='username-submit' type="submit" value="Create username" />
    </form> */}
    </>
  );
};

export default IndexPage;
