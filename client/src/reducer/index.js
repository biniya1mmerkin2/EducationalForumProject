import { combineReducers } from "redux";

import reducer from "./reducer";
import user from "./user";
import post from "./post";

export default combineReducers({ reducer, user, post });
