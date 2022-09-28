import { combineReducers } from "redux";

import members from "./members";
import post from "./post";

export default combineReducers({ members, post });
