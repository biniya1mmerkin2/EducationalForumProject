import {
  postdata,
  getallpost,
  getSinglePost,
  getLatestPost,
  like,
  dislike,
} from "../api/api";
import {
  ISLOADING,
  FINISHED,
  POST,
  ALLPOST,
  GETLATEST,
} from "../constants/constants";

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

export const getLatestPosts = () => async (dispatch) => {
  try {
    const { data } = await getLatestPost();
    dispatch({ type: GETLATEST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postLike = (postid, usersid) => async (dispatch) => {
  try {
    const { data } = await like(postid, usersid);
  } catch (error) {
    console.log(error);
  }
};

export const postdislike = (postid, usersid) => async (dispatch) => {
  try {
    const { data } = await dislike(postid, usersid);
  } catch (error) {
    console.log(error);
  }
};
