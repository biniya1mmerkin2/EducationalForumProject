import { signin, signup, sendEmail, resetPassword } from "../api/api";
import {
  SIGNIN,
  ISLOADING,
  FINISHED,
  MESSAGE,
  REMOVEMESSAGE,
  BUTTONLOADING,
  BUTTONLOADINGFINISHED,
} from "../constants/constants";

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

    dispatch({ type: FINISHED });
    navigate(`/forum/Catagory/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const sendEmailToUser = (userdata) => async (dispatch) => {
  try {
    dispatch({ type: BUTTONLOADING });
    dispatch({ type: REMOVEMESSAGE });
    const { data } = await sendEmail(userdata);
    dispatch({ type: BUTTONLOADINGFINISHED });
    dispatch({ type: MESSAGE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const sendPasswordReset = (datavalue, token) => async (dispatch) => {
  try {
    dispatch({ type: BUTTONLOADING });
    dispatch({ type: REMOVEMESSAGE });
    const data = await resetPassword(datavalue, token);
    dispatch({ type: BUTTONLOADINGFINISHED });
    dispatch({ type: MESSAGE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
