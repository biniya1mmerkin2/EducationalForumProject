import { FETCH_ALL } from "../constants/constants";

const reducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
