import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path="/" element={<indexPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
