import { TEST, TESTNOT } from "../constants/constants";
import { createCatagory } from "../api/api";

export const testRedux = (post) => async (dispatch) => {
  try {
    const { data } = await createCatagory(post);
    dispatch({ type: TEST, payload: data });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const testRedux1 = () => {
  return {
    type: TESTNOT,
  };
};
