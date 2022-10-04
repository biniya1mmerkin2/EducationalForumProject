import {
  signin,
  signup,
  sendEmail,
  resetPassword,
  getAllUser,
  updateuserinfo,
} from "../api/api";
import {
  SIGNIN,
  ISLOADING,
  FINISHED,
  MESSAGE,
  REMOVEMESSAGE,
  BUTTONLOADING,
  BUTTONLOADINGFINISHED,
  GETALLUSER,
  SETERROR,
  REMOVEERROR,
} from "../constants/constants";

export const signUp = (userdata) => async (dispatch) => {
  try {
    dispatch({ type: BUTTONLOADING });
    dispatch({ type: REMOVEERROR });
    const { data } = await signup(userdata);
    dispatch({ type: MESSAGE, payload: data.message });
    dispatch({ type: BUTTONLOADINGFINISHED });
  } catch (error) {
    console.log(error);
    dispatch({ type: SETERROR, payload: error.message + " please,try again!" });
    dispatch({ type: BUTTONLOADINGFINISHED });
  }
};

export const signIn = (userdata, navigate, id) => async (dispatch) => {
  try {
    dispatch({ type: BUTTONLOADING });
    dispatch({ type: REMOVEERROR });
    const { data } = await signin(userdata);
    dispatch({ type: BUTTONLOADINGFINISHED });
    if (!data?.result)
      return dispatch({
        type: MESSAGE,
        payload: "You typed wrong email and password!",
      });

    dispatch({ type: SIGNIN, payload: data });
    dispatch({ type: MESSAGE, payload: "signin successfuly!" });

    navigate(`/forum/Catagory/${id}`);
  } catch (error) {
    console.log(error);
    dispatch({ type: SETERROR, payload: error.message });
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    
    const { data } = await getAllUser();
    dispatch({ type: GETALLUSER, payload: data });
   
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

export const updateuserinfoaction = (userdata, id) => async (dispatch) => {
  try {
    dispatch({ type: BUTTONLOADING });
    const data = await updateuserinfo(userdata, id);
    dispatch({ type: BUTTONLOADINGFINISHED });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};