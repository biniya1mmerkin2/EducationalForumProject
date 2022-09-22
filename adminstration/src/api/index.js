import axios from "axios";

const url = "http://localhost:5000";

export const createCatagory = (post) => axios.post(`${url}/forum`, post);
export const getCatagory = () => axios.get(`${url}/forum`);
export const updateCatagory = (id, post) =>
  axios.patch(`${url}/forum/${id}`, post);
export const deleteCategory = (id) => axios.delete(`${url}/forum/${id}`);
