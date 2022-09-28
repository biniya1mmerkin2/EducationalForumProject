import * as api from "../api";

import { FINISHED, GETUSERS, ISLOADING } from "../constants/constants";

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: ISLOADING });
    const { data } = await api.getallmembers();
    dispatch({ type: GETUSERS, payload: data });
    dispatch({ type: FINISHED });
  } catch (error) {
    console.log(error);
  }
};
