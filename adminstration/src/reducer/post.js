import {
  CREATE,
  FETCH_ALL,
  ISLOADING,
  FINISHED,
  UPDATEDDATA,
  UPDATENULL,
} from "../constants/constants";

const postcatagory = (
  state = { posts: [null], post: [], isloading: true, check: null },
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

    case UPDATEDDATA:
      return { ...state, check: 1 };
    case UPDATENULL:
      return { ...state, check: null };

    default:
      return state;
  }
};

export default postcatagory;
