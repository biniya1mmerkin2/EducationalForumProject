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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
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
  const [message, setmessage] = useState("");
  const [isSignUp, setisSignUp] = useState(true);

  const handleSubmit = () => {
    if (formdata.password === formdata.confirmpassword) {
      setvalidData({
        firstName: formdata.firstName,
        lastName: formdata.lastName,
        email: formdata.email,
        password: formdata.password,
      });
      console.log(validData);
    } else {
      setmessage("your passwords not match");
      console.log(message);
    }

    if (Validator.isEmail(formdata.email)) return console.log("valid email");
    return console.log("not valid email");
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              helperText={!validEmail ? "" : validEmail}
              sx={{ mb: 1 }}
              value={formdata.email}
              onChange={(e) =>
                setformdata({ ...formdata, email: e.target.value })
              }
            />
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
              {message ? message : ""}
            </Typography>

            <Button
              variant="contained"
              color="warning"
              fullWidth
              onClick={handleSubmit}
            >
              {isSignUp ? "Submit" : "Login"}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};
export default SignUp;
