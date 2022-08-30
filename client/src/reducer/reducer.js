import { TEST, TESTNOT } from "../constants/constants";

const reducer = (state = { test: null }, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        test: action.payload,
      };

    case TESTNOT:
      return {
        ...state,
        test: false,
      };

    default:
      return state;
  }
};

export default reducer;
