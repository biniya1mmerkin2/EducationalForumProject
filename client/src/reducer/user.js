import {
  SIGNIN,
  ISLOADING,
  FINISHED,
  MESSAGE,
  REMOVEMESSAGE,
} from "../constants/constants";

const user = (
  state = { userData: [], isloading: false, message: "" },
  action
) => {
  switch (action.type) {
    case SIGNIN:
      localStorage.setItem("userdata", JSON.stringify({ ...action?.payload }));
      return { ...state, userData: action.payload };
    case ISLOADING:
      return { ...state, isloading: true };

    case FINISHED:
      return { ...state, isloading: false };

    case MESSAGE:
      return { ...state, message: action.payload };
    case REMOVEMESSAGE:
      return { ...state, message: "" };
    default:
      return state;
  }
};

export default user;
