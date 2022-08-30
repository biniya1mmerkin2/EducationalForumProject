import React from "react";
import { Paper, Typography, TextField, Button, Stack } from "@mui/material";
import Filebase from "react-file-base64";

const Form = () => {
  return (
    <Paper sx={{ ml: 5 }} elevation={6}>
      <Stack>
        <Stack alignItems={"center"}>
          <Typography sx={{ m: 1 }} variant="h6">
            Create Catagory
          </Typography>
        </Stack>
        <TextField
          sx={{ m: 1 }}
          name="title"
          required={true}
          variant="outlined"
          label="title"
        />
        <TextField
          sx={{ m: 1 }}
          name="description"
          required={true}
          variant="outlined"
          label="discription"
        />
        <Stack sx={{ m: 1 }}>
          <Filebase type="file" multiple={false} />
        </Stack>
        <Button sx={{ m: 1 }} variant="contained">
          Submit
        </Button>
      </Stack>
    </Paper>
  );
};

export default Form;
