import axios from "axios";

const url = "http://localhost:5000";

export const getCatagory = () => axios.get(`${url}/forum`);
export const signup = (userdata) => axios.post(`${url}/user/signup`, userdata);
export const signin = (userdata) => axios.post(`${url}/user/signin`, userdata);
export const sendEmail = (data) =>
  axios.post(`${url}/user/forgetpassword`, data);
export const resetPassword = (data, token) =>
  axios.post(`${url}/user/forgetpassword/${token}`, data);
  export const getAllUser = () => axios.get(`${url}/user`);
export const updateuserinfo = (data, id) =>
  axios.patch(`${url}/user/update/${id}`, data);
export const postdata = (data) => axios.post(`${url}/post`, data);
export const getallpost = (id) => axios.get(`${url}/post/${id}`);
export const getSimilarpost = (id) =>
  axios.get(`${url}/post/similarpost/${id}`);
export const getSinglePost = (id) => axios.get(`${url}/post/singlepost/${id}`);
export const updateSinglePost = (id, data) =>
  axios.patch(`${url}/post/singlepost/${id}`, data);
export const deleteSinglePost = (id) =>
  axios.delete(`${url}/post/singlepost/${id}`);
export const getLatestPost = () => axios.get(`${url}/post`);
export const like = (id, userid) =>
  axios.patch(`${url}/post/reaction/${id}`, userid);
export const dislike = (id, userid) =>
  axios.patch(`${url}/post/reactionremove/${id}`, userid);
export const postcomment = (comment, postid) =>
  axios.patch(`${url}/post/comment/${postid}`, comment);
export const likecomment = (id, userid) =>
  axios.patch(`${url}/post/commentreaction/${id}`, userid);
export const dislikecomment = (id, userid) =>
  axios.patch(`${url}/post/commentreactionremove/${id}`, userid);
