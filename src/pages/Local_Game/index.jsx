import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectInputs } from '../../components';
import useAxios from '../../hooks/useAxios';

const LocalGame = () => {
  const navigate = useNavigate();
  const { response, loading, error } = useAxios({ url: 'api_category.php' });

  if (loading) {
    return <h1>Put loading component here</h1>;
  }
  if (error) {
    return <h1>Put error component here</h1>;
  }

  const difficultyOpt = [
    { id: 'easy', name: 'Easy' },
    { id: 'medium', name: 'Medium' },
    { id: 'hard', name: 'Hard' },
  ];

  const typeOpt = [
    { id: 'multiple', name: 'Multiple Choice' },
    { id: 'boolean', name: 'True/False' },
  ];

  const numberOpt = [
    { id: 10, name: 5 },
    { id: 12, name: 10 },
    { id: 14, name: 15 },
    { id: 16, name: 20 },
    { id: 18, name: 25 },
    { id: 20, name: 30 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/game');
  };

  return (
    <div className="">
      <h1>Local Game</h1>

      <form onSubmit={handleSubmit}>
        <SelectInputs label="Category" apiData={response.trivia_categories} />
        <SelectInputs label="Difficulty" apiData={difficultyOpt} />
        <SelectInputs label="Game Type" apiData={typeOpt} />
        <SelectInputs label="Number Of Questions" apiData={numberOpt} />
        <input type="submit" value="Start" />
      </form>
    </div>
  );
};

export default LocalGame;
