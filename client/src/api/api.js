import axios from "axios";

const url = "http://localhost:5000";

export const getCatagory = () => axios.get(`${url}/forum`);
export const signup = (userdata) => axios.post(`${url}/user/signup`, userdata);
export const signin = (userdata) => axios.post(`${url}/user/signin`, userdata);
export const sendEmail = (data) =>
  axios.post(`${url}/user/forgetpassword`, data);
export const resetPassword = (data, token) =>
  axios.post(`${url}/user/forgetpassword/${token}`, data);
