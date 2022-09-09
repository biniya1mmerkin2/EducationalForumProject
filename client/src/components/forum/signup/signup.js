import React from "react";
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
const SignUp = () => {
  return (
    <Box sx={style}>
      <Stack>
        <Stack justifyContent={"center"} alignItems="center">
          <Typography
            gutterBottom
            fontWeight={"bold"}
            variant="h4"
            color="chocolate"
          >
            Sign Up
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <TextField label="First Name" name="firstname" />
          <TextField label="Last Name" name="lastname" />
        </Stack>
        <Stack mt={1}>
          <TextField label="Email" name="email" sx={{ mb: 1 }} />
          <TextField
            type={"password"}
            label="Password"
            name="password"
            sx={{ mb: 1 }}
          />
          <TextField
            type={"password"}
            label="ConfirmPassword"
            name="confirmpassword"
            sx={{ mb: 1 }}
          />
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="show password" edge="end">
                  <VisibilityOff />
                </IconButton>
              </InputAdornment>
            }
            // label="Enterpassword"
          />
          <Button variant="contained" color="warning" fullWidth>
            Submit
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
export default SignUp;
