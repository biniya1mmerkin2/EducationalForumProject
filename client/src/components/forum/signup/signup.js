import React, { useState } from "react";
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
  const [isSignUp, setisSignUp] = useState(true);

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
              <TextField label="First Name" name="firstname" />
              <TextField label="Last Name" name="lastname" />
            </Stack>
          )}
          <Stack mt={1}>
            <TextField label="Email" name="email" sx={{ mb: 1 }} />
            <FormControl variant="outlined" sx={{ mb: 1 }}>
              <InputLabel htmlFor="password1">Password</InputLabel>
              <OutlinedInput
                id="password1"
                type={showpassword ? "text" : "password"}
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

            <Button
              variant="contained"
              color="warning"
              fullWidth
              onClick={() => setisSignUp(!isSignUp)}
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
