import React from "react";
import {
  Stack,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
} from "@mui/material";

const ForgetPassword = () => {
  return (
    <Container maxWidth="md">
      <Paper>
        <Stack justifyContent="center" alignItems="center">
          <Stack>
            <Typography variant="h4" fontStyle={500} mb={1} mt={2}>
              Reset Password
            </Typography>
            <TextField label="email" variant="outlined" placeholder="email" />
            <Button variant="contained" color="warning" sx={{ mt: 1, mb: 1 }}>
              Send
            </Button>
            <Typography>Check your email</Typography>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

export default ForgetPassword;
