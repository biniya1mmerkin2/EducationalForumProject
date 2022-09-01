import { FETCH_ALL } from "../constants/constants";
import { createCatagory, getCatagory } from "../api/api";

export const getCategory = () => async (dispatch) => {
  try {
    const { data } = await getCatagory();
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(data);
  } catch (error) {}
};
