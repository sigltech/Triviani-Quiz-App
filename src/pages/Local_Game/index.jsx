import React from "react";
import { useNavigate } from "react-router-dom";
import { SelectInputs } from "../../components";
import useAxios from "../../hooks/useAxios";
import "./style.css";
import { LoadingPage } from "../../components/index.jsx";

const LocalGame = () => {
  const navigate = useNavigate();

  const { response, Loading, error } = useAxios({ url: "api_category.php" });

  if (loading) {
    return <LoadingPage />;
  }
  if (error) {
    return <h1>Put error component here</h1>;
  }

  const difficultyOpt = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOpt = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];

  const numberOpt = [
    { id: 10, name: 5 },
    { id: 12, name: 10 },
    { id: 14, name: 15 },
    { id: 16, name: 20 },
    { id: 18, name: 25 },
    { id: 20, name: 30 },
  ];

  const PlayerOpt = [
    { id: 10, name: 1 },
    { id: 12, name: 2 },
    { id: 14, name: 3 },
    { id: 16, name: 4 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/game");
  };

  return (
    <div className="">
      <div className="Localgame-container">
        <div className="localgame-inputs-container">
          <h1>Local Game</h1>
          <form onSubmit={handleSubmit}>
            <SelectInputs
              label="Category"
              apiData={response.trivia_categories}
            />
            <SelectInputs label="Difficulty" apiData={difficultyOpt} />
            <SelectInputs label="Game Type" apiData={typeOpt} />
            <SelectInputs label="Number Of Questions" apiData={numberOpt} />
            <SelectInputs label="Number Of Players" apiData={PlayerOpt} />
            <input id="startgame-btn" type="submit" value="Start" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LocalGame;
