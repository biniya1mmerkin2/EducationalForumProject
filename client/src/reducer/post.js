import {
  ISLOADING,
  FINISHED,
  POST,
  ALLPOST,
  GETLATEST,
  BUTTONLOADING,
  BUTTONLOADINGFINISHED,
} from "../constants/constants";

const post = (
  state = {
    allposts: [],
    post: [],
    isloading: false,
    latestpost: [],
    buttonisloading: false,
  },
  action
) => {
  switch (action.type) {
    case POST:
      return { ...state, post: action.payload };
    case ALLPOST:
      return { ...state, allposts: action.payload };
    case ISLOADING:
      return { ...state, isloading: true };
    case FINISHED:
      return { ...state, isloading: false };
    case GETLATEST:
      return { ...state, latestpost: action.payload };
    case BUTTONLOADING:
      return { ...state, buttonisloading: true };
    case BUTTONLOADINGFINISHED:
      return { ...state, buttonisloading: false };
    default:
      return state;
  }
};

export default post;
