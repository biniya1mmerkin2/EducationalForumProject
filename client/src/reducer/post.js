import { ISLOADING, FINISHED, POST } from "../constants/constants";

const post = (state = { post: [], isloading: false }, action) => {
  switch (action.type) {
    case POST:
      return { ...state, post: action.payload };
    case ISLOADING:
      return { ...state, isloading: true };
    case FINISHED:
      return { ...state, isloading: false };
    default:
      return state;
  }
};

export default post;
