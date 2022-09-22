import {
  SIGNIN,
  ISLOADING,
  FINISHED,
  MESSAGE,
  REMOVEMESSAGE,
  BUTTONLOADING,
  BUTTONLOADINGFINISHED,
  GETALLUSER,
  SETERROR,
  REMOVEERROR,
} from "../constants/constants";

const user = (
  state = {
    userData: [],
    isloading: false,
    message: "",
    buttonloading: false,
    allUser: [],
    error: "",
  },
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
    case BUTTONLOADING:
      return { ...state, buttonloading: true };
    case BUTTONLOADINGFINISHED:
      return { ...state, buttonloading: false };
    case GETALLUSER:
      return { ...state, allUser: action.payload };
    case SETERROR:
      return { ...state, error: action.payload };
    case REMOVEERROR:
      return { ...state, error: "" };
    default:
      return state;
  }
};

export default user;
