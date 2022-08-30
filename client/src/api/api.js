import axios from "axios";

const url = "http://localhost:5000";

export const createCatagory = (data) => axios.post(`${url}/forum`, data);
