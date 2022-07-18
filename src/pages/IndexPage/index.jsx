import React from 'react';
import './style.css';

const IndexPage = () => {
  return (
    <>
    <h1 id='indexpage-header'>Joey Triviani</h1>

    <form className='indexpage-form'>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value="...Enter a username" />
      <input id='username-submit' type="submit" value="Create username" />
    </form>

    </>
  );
};

export default IndexPage;
