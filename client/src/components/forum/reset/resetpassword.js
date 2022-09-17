import React, { useState } from "react";
import {
  Stack,
  Container,
  Typography,
  Paper,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { sendPasswordReset } from "../../../action/user";
import { useParams } from "react-router-dom";
const ResetPassword = () => {
  const [password, setPassword] = useState({ password: "" });
  const [formdata, setFormData] = useState({
    password: "",
    confirmpassword: "",
    message: "",
  });
  const [showpassword, setshowpassword] = useState(false);
  const dispatch = useDispatch();
  const { token } = useParams();
  const { buttonloading, message } = useSelector((state) => state.user);
  const handleShowPassword = () => {
    setshowpassword(!showpassword);
  };

  const handleClick = () => {
    if (formdata.confirmpassword !== formdata.password)
      return setFormData({
        ...formdata,
        message: "Confirm the Password Please!",
      });

    setPassword({ ...password, password: formdata.password });
    dispatch(sendPasswordReset(password, token));
    setFormData({ password: "", confirmpassword: "", message: "" });
  };
  return (
    <>
      {" "}
      <Container maxWidth="md">
        <Paper>
          <Stack justifyContent="center" alignItems="center">
            <Stack>
              <Typography variant="h4" fontStyle={500} mb={1} mt={2}>
                Reset Password
              </Typography>

              <FormControl variant="outlined" sx={{ mb: 1 }}>
                <InputLabel htmlFor="password1">Password</InputLabel>
                <OutlinedInput
                  id="password1"
                  type={showpassword ? "text" : "password"}
                  value={formdata.password}
                  onChange={(e) =>
                    setFormData({ ...formdata, password: e.target.value })
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

              <FormControl variant="outlined" sx={{ mb: 1 }}>
                <InputLabel htmlFor="password2">confirm password</InputLabel>
                <OutlinedInput
                  id="password2"
                  type={showpassword ? "text" : "password"}
                  value={formdata.confirmpassword}
                  onChange={(e) =>
                    setFormData({
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

              <Button
                variant="contained"
                color="warning"
                sx={{ mt: 1, mb: 1 }}
                onClick={handleClick}
              >
                {buttonloading ? <CircularProgress /> : "Rest"}
              </Button>
              <Typography color="red">
                {!formdata.message ? "" : formdata.message}
              </Typography>
              <Typography
                fontStyle="initial"
                color={message?.data?.status ? "black" : "red"}
              >
                {message?.data?.message ? message?.data?.message : ""}
              </Typography>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </>
  );
};

export default ResetPassword;
