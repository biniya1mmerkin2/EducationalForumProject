import React, { useState } from "react";
import {
  Typography,
  Paper,
  TextField,
  Container,
  Stack,
  Button,
} from "@mui/material";
import Filebase from "react-file-base64";

const PostCatagory = () => {
  const [catagories, setCatagories] = useState({
    title: "",
    description: "",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(catagories);
    setCatagories({
      title: "",
      description: "",
      selectedFile: "",
    });
  };

  return (
    <Container maxWidth={"md"}>
      <Paper elevation={6} sx={{ height: 400 }}>
        <Stack justifyContent={"center"} alignItems="center" spacing={1}>
          <Stack>
            <Typography variant="h6"> Post Catagory Page</Typography>
          </Stack>
          <Stack spacing={1}>
            <TextField
              name="title"
              required={true}
              variant="outlined"
              label="title"
              value={catagories.title}
              onChange={(e) =>
                setCatagories({ ...catagories, title: e.target.value })
              }
              fullWidth
            />
            <TextField
              name="description"
              required={true}
              variant="outlined"
              label="discription"
              value={catagories.description}
              onChange={(e) =>
                setCatagories({ ...catagories, description: e.target.value })
              }
              fullWidth
            />
            <Filebase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setCatagories({ ...catagories, selectedFile: base64 })
              }
            />
            <Button fullWidth variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
          <Stack></Stack>
          <Stack></Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

export default PostCatagory;
