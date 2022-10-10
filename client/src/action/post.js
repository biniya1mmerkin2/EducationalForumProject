import { postdata, getallpost, getSinglePost } from "../api/api";
import { ISLOADING, FINISHED, POST, ALLPOST } from "../constants/constants";

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

export const allPost = (id) => async (dispatch) => {
  try {
    const { data } = await getallpost(id);
    dispatch({ type: ALLPOST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getSinglePostData = (id) => async (dispatch) => {
  try {
    const { data } = await getSinglePost(id);
    dispatch({ type: POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
