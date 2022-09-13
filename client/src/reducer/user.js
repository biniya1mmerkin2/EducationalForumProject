import { SIGNIN, ISLOADING, FINISHED } from "../constants/constants";

const user = (state = { userData: [], isloading: false }, action) => {
  switch (action.type) {
    case SIGNIN:
      localStorage.setItem("userdata", JSON.stringify({ ...action?.payload }));
      return { ...state, userData: action.payload };
    case ISLOADING:
      return { ...state, isloading: true };

    case FINISHED:
      return { ...state, isloading: false };
    default:
      return state;
  }
};

export default user;
