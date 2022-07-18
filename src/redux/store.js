import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
