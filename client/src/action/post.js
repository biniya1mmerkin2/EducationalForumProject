import {
  postdata,
  getallpost,
  getSinglePost,
  getLatestPost,
  like,
  dislike,
  postcomment,
  likecomment,
  dislikecomment,
  updateSinglePost,
  deleteSinglePost,
  getSimilarpost,
} from "../api/api";
import {
  ISLOADING,
  FINISHED,
  POST,
  ALLPOST,
  GETLATEST,
  BUTTONLOADING,
  BUTTONLOADINGFINISHED,
  SIMILARPOST,
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

export const similarpost = (id) => async (dispatch) => {
  try {
    const { data } = await getSimilarpost(id);
    dispatch({ type: SIMILARPOST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getSinglePostData = (id) => async (dispatch) => {
  try {
    const { data } = await getSinglePost(id);
    // console.log(data);
    dispatch({ type: POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateSinglePostData = (id, postdata) => async (dispatch) => {
  try {
    const { data } = await updateSinglePost(id, postdata);
    dispatch({ type: POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteSinglePostData = (id) => async (dispatch) => {
  try {
    const { data } = await deleteSinglePost(id);
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

export const comment = (comment, postid) => async (dispatch) => {
  try {
    dispatch({ type: BUTTONLOADING });
    const { data } = await postcomment(comment, postid);

    dispatch({ type: BUTTONLOADINGFINISHED });
  } catch (error) {
    console.log(error);
  }
};

export const likecome = (id, userid) => async (dispatch) => {
  try {
    const { data } = await likecomment(id, userid);
  } catch (error) {
    console.log(error);
  }
};

export const removelikecome = (id, userid) => async (dispatch) => {
  try {
    const { data } = await dislikecomment(id, userid);
  } catch (error) {
    console.log(error);
  }
};
