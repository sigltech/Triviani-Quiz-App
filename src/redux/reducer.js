import {
  CHANGE_AMOUNT,
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_SCORE,
  CHANGE_TYPE,
  CHANGE_USERNAME,
  CHANGE_PLAYERS,
  CHANGE_PLAYER
} from "./actionTypes";

const initState = {
  username: "",
  question_category: "",
  question_difficulty: "",
  question_type: "",
  questionsAmount: 10,
  players: 1,
  intScore: 0,
  player: [{name: "", score: 0}],
};
const Reducer = (state = initState, action) => {
  console.log(state.player)
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        question_category: action.payload,
      };
    case CHANGE_DIFFICULTY:
      return {
        ...state,
        question_difficulty: action.payload,
      };
    case CHANGE_TYPE:
      return {
        ...state,
        question_type: action.payload,
      };
    case CHANGE_AMOUNT:
      return {
        ...state,
        questionsAmount: action.payload,
      };
    case CHANGE_SCORE:
      return {
        ...state,
        intScore: action.payload,
      };
    case CHANGE_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case CHANGE_PLAYERS:
      return {
        ...state,
        players: action.payload,
      };
    case CHANGE_PLAYER:
      return {
        ...state,
        player: action.payload,
      }
    default:
      return state;
  }
};

export default Reducer;
