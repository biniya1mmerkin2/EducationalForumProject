import * as api from "../api";
import { CREATE, FETCH_ALL, ISLOADING, FINISHED } from "../constants/constants";

export const createCatagory = (post) => async (dispatch) => {
  try {
    dispatch({ type: ISLOADING });
    const { data } = await api.createCatagory(post);
    dispatch({ type: CREATE, payload: data });
    dispatch({ type: FINISHED });
  } catch (error) {
    console.log(error);
  }
};

export const getCatagory = () => async (dispatch) => {
  try {
    dispatch({ type: ISLOADING });
    const { data } = await api.getCatagory();
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: FINISHED });
  } catch (error) {
    console.log(error);
  }
};

export const updateCatagory = (id, post) => async (dispatch) => {
  try {
    await api.updateCatagory(id, post);
  } catch (error) {
    console.log(error);
  }
};
