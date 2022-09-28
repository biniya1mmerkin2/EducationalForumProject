import { GETUSERS, ISLOADING, FINISHED } from "../constants/constants";
const members = (state = { members: [], isloading: false }, action) => {
  switch (action.type) {
    case GETUSERS:
      return { ...state, members: action.payload };
    case ISLOADING:
      return { ...state, isloading: true };
    case FINISHED:
      return { ...state, isloading: false };
    default:
      return state;
  }
};

export default members;
