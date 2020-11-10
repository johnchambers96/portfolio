import Settings from "./settings";
import Players from "./players";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  settings: Settings,
  players: Players,
});

export default rootReducer;
