import {
  CHANGE_AMOUNT,
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_SCORE,
  CHANGE_TYPE,
  CHANGE_USERNAME,
  CHANGE_ONLINE_USERNAME,
  CHANGE_PLAYERS,
  CHANGE_PLAYER,
  CHANGE_LOCAL_PLAYERS,
  CHANGE_ONLINE_PLAYER,
  CHANGE_ONLINE_ROOM
} from "./actionTypes";

const initState = {
  username: [],
  online_username: "",
  question_category: "",
  question_difficulty: "",
  question_type: "",
  questionsAmount: 10,
  players: 1,
  intScore: 0,
  player: [],
  online_player: [],
  online_room: "",
  local_players: [],
};
const Reducer = (state = initState, action) => {

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
        allPlayerRecords: [...state.allPlayerRecords, action.newItem]
      }
    case CHANGE_ONLINE_PLAYER:
      return {
        ...state,
        online_player: action.payload,
      }
    case CHANGE_LOCAL_PLAYERS:
      return {
        ...state,
        local_players: action.payload,
      }
    case CHANGE_ONLINE_USERNAME:
      return {
        ...state,
        online_username: action.payload,
      }
    case CHANGE_ONLINE_ROOM:
      return {
        ...state,
        online_room: action.payload,
      }
    default:
      return state;
  }
};

export default Reducer;
