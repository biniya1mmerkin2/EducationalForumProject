import React, { useState } from "react";
import Validator from "validator";
import {
  Typography,
  Box,
  Stack,
  TextField,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
  Modal,
  FormControl,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { signUp, signIn } from "../../../action/user";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const SignUp = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [showpassword, setshowpassword] = useState(false);
  const [formdata, setformdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [validEmail, setValidEmail] = useState("");
  const [validData, setvalidData] = useState();
  const [passwordValidation, setpasswordValidation] = useState("");
  const [isSignUp, setisSignUp] = useState(false);

  //submit handler
  const handleSubmit = () => {
    if (isSignUp) {
      if (
        formdata.password === formdata.confirmpassword &&
        Validator.isEmail(formdata.email)
      ) {
        setvalidData({
          firstName: formdata.firstName,
          lastName: formdata.lastName,
          email: formdata.email,
          password: formdata.password,
        });

        setpasswordValidation("");
        setValidEmail("");

        dispatch(signUp(validData));
        setformdata({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmpassword: "",
        });
        handleClose();
      }
      if (!Validator.isEmail(formdata.email)) {
        setValidEmail("Please, enter valid email!");
        setpasswordValidation("");
      }
      if (formdata.password !== formdata.confirmpassword) {
        setpasswordValidation("your passwords not match");
        setValidEmail("");
      }
    } else {
      dispatch(
        signIn(
          { email: formdata.email, password: formdata.password },
          navigate,
          id
        )
      );
      setformdata("");
      handleClose();
    }
  };

  //close the modal
  const handleClose = () => {
    setOpen(false);
  };

  //handle show password icon
  const handleShowPassword = () => {
    setshowpassword(!showpassword);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Stack>
          <Stack justifyContent={"center"} alignItems="center">
            <Typography
              gutterBottom
              fontWeight={"bold"}
              variant="h4"
              color="chocolate"
            >
              {isSignUp ? " Sign Up" : "Sign In"}
            </Typography>
          </Stack>

          {isSignUp && (
            <Stack direction={"row"} spacing={2}>
              <TextField
                label="First Name"
                name="firstname"
                value={formdata.firstName}
                onChange={(e) =>
                  setformdata({ ...formdata, firstName: e.target.value })
                }
              />
              <TextField
                label="Last Name"
                name="lastname"
                value={formdata.lastName}
                onChange={(e) =>
                  setformdata({ ...formdata, lastName: e.target.value })
                }
              />
            </Stack>
          )}

          <Stack mt={1}>
            <TextField
              label="Email"
              name="email"
              sx={{ mb: 1 }}
              value={formdata.email}
              onChange={(e) =>
                setformdata({ ...formdata, email: e.target.value })
              }
            />

            <Typography variant="caption" color="red">
              {!validEmail ? "" : validEmail}
            </Typography>

            <FormControl variant="outlined" sx={{ mb: 1 }}>
              <InputLabel htmlFor="password1">Password</InputLabel>
              <OutlinedInput
                id="password1"
                type={showpassword ? "text" : "password"}
                value={formdata.password}
                onChange={(e) =>
                  setformdata({ ...formdata, password: e.target.value })
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="show password"
                      edge="end"
                      onClick={handleShowPassword}
                    >
                      {showpassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            {isSignUp && (
              <FormControl variant="outlined" sx={{ mb: 1 }}>
                <InputLabel htmlFor="password2">ConfirmPassword</InputLabel>
                <OutlinedInput
                  id="password2"
                  type={showpassword ? "text" : "password"}
                  value={formdata.confirmpassword}
                  onChange={(e) =>
                    setformdata({
                      ...formdata,
                      confirmpassword: e.target.value,
                    })
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="show password"
                        edge="end"
                        onClick={handleShowPassword}
                      >
                        {showpassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            )}

            <Typography variant="caption" color="red">
              {passwordValidation ? passwordValidation : ""}
            </Typography>

            <Button
              variant="contained"
              color="warning"
              fullWidth
              onClick={handleSubmit}
            >
              {isSignUp ? "Submit" : "Login"}
            </Button>

            {!isSignUp && (
              <Link
                href="/forgetpassword"
                className="active"
                variant="inherit"
                underline="none"
                color="#000000"
                marginLeft={8}
              >
                forgetpassword?
              </Link>
            )}

            <Button
              color="warning"
              className="active"
              size="small"
              onClick={() => setisSignUp(!isSignUp)}
            >
              {!isSignUp ? "Create new Account" : "Login"}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};
export default SignUp;
