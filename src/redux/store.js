import { legacy_createStore as createStore } from "redux";
import Reducer from "./reducer";

export default createStore(Reducer);
