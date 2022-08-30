import * as api from "../api";
import { CREATE, FETCH_ALL } from "../constants/constants";

export const createCatagory = (post) => async (dispatch) => {
  try {
    const { data } = await api.createCatagory(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getCatagory = () => async (dispatch) => {
  try {
    const { data } = await api.getCatagory();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
