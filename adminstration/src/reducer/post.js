import { CREATE, FETCH_ALL, ISLOADING, FINISHED } from "../constants/constants";

const postcatagory = (
  state = { posts: [null], post: [], isloading: true },
  action
) => {
  switch (action.type) {
    case CREATE:
      return { ...state, post: action.payload };
    case FETCH_ALL:
      return { ...state, posts: action.payload };
    case ISLOADING:
      return { ...state, isloading: true };
    case FINISHED:
      return { ...state, isloading: false };

    default:
      return state;
  }
};

export default postcatagory;
