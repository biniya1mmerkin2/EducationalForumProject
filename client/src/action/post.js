import { postdata } from "../api/api";

export const post = (postdata1) => async (dispatch) => {
  try {
    const { data } = await postdata(postdata1);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
