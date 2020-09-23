import { combineReducers } from "redux";

import auth from "./auth/reducer";
import main from "./main/reducer";

export default combineReducers({
  auth,
  main,
});
