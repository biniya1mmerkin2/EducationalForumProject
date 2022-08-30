import { CREATE, FETCH_ALL } from "../constants/constants";

const postcatagory = (state = { posts: [null], post: [] }, action) => {
  switch (action.type) {
    case CREATE:
      return { ...state, post: action.payload };
    case FETCH_ALL:
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};

export default postcatagory;
