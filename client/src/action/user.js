import { signin, signup } from "../api/api";
import { SIGNIN, ISLOADING, FINISHED } from "../constants/constants";

export const signUp = (userdata) => async (dispatch) => {
  try {
    const data = await signup(userdata);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const signIn = (userdata, navigate, id) => async (dispatch) => {
  try {
    dispatch({ type: ISLOADING });
    const { data } = await signin(userdata);

    dispatch({ type: SIGNIN, payload: data });
    console.log(data);
    dispatch({ type: FINISHED });
    navigate(`/forum/Catagory/${id}`);
  } catch (error) {
    console.log(error);
  }
};
