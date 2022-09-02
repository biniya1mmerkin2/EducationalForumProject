import { FETCH_ALL, FINISHED, ISLOADING } from "../constants/constants";
import { getCatagory } from "../api/api";

export const getCategory = () => async (dispatch) => {
  try {
    dispatch({ type: ISLOADING });
    const { data } = await getCatagory();
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: FINISHED });
  } catch (error) {
    console.log(error);
  }
};
