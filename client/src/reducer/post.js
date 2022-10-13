import {
  ISLOADING,
  FINISHED,
  POST,
  ALLPOST,
  GETLATEST,
} from "../constants/constants";

const post = (
  state = { allposts: [], post: [], isloading: false, latestpost: [] },
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
    default:
      return state;
  }
};

export default post;
