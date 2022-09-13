import { combineReducers } from "redux";

import reducer from "./reducer";
import user from "./user";

export default combineReducers({ reducer, user });
