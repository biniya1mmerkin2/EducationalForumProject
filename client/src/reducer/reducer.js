import { FETCH_ALL, ISLOADING, FINISHED } from "../constants/constants";

const reducer = (state = { posts: [], isloading: false }, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload,
      };
    case ISLOADING:
      return { ...state, isloading: true };

    case FINISHED:
      return { ...state, isloading: false };

    default:
      return state;
  }
};

export default reducer;
