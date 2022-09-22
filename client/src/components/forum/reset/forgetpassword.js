import React, { useState, useEffect } from "react";
import {
  Stack,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import validator from "validator";
import { sendEmailToUser } from "../../../action/user";
import { useDispatch, useSelector } from "react-redux";

const ForgetPassword = () => {
  const [email, setEmail] = useState({ email: "", validity: true });
  const dispatch = useDispatch();
  const { buttonloading, message } = useSelector((state) => state.user);
  const data = useSelector((state) => state.user);

  const handleClick = () => {
    if (!validator.isEmail(email.email))
      return setEmail({ ...email, validity: false });

    dispatch(sendEmailToUser(email));

    setEmail({ email: "", validity: true });
  };

  return (
    <Container maxWidth="md">
      <Paper>
        <Stack justifyContent="center" alignItems="center">
          <Stack>
            <Typography variant="h4" fontStyle={500} mb={1} mt={2}>
              Reset Password
            </Typography>

            <TextField
              label="email"
              variant="outlined"
              value={email.email}
              onChange={(e) => setEmail({ ...email, email: e.target.value })}
            />

            <Button
              variant="contained"
              color="warning"
              sx={{ mt: 1, mb: 1 }}
              onClick={handleClick}
              fullWidth
            >
              {!buttonloading ? "Send" : <CircularProgress color="inherit" />}
            </Button>

            <Typography color="red">
              {email.validity ? "" : "Please,enter valid email!"}
            </Typography>

            <Typography
              fontStyle="initial"
              color={message.status ? "black" : "red"}
            >
              {!message.message ? "" : message.message}
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

export default ForgetPassword;
