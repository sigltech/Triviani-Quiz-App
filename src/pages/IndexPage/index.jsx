import React from 'react';

const IndexPage = () => {
  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value="...Enter a username" />
      <input type="submit" value="Create username" />
    </form>
  );
};

export default IndexPage;
