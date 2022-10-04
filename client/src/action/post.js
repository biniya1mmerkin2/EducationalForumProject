import { postdata } from "../api/api";
import { ISLOADING, FINISHED, POST } from "../constants/constants";

export const post = (postdata1) => async (dispatch) => {
  try {
    dispatch({ type: ISLOADING });
    const { data } = await postdata(postdata1);

    dispatch({ type: POST, payload: data });
    dispatch({ type: FINISHED });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
