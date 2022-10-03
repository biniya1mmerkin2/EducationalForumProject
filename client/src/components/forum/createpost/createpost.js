import React, { useState } from "react";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import Image from "../../../images/Default.png";
import Filebase from "react-file-base64";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    title: "",
    description: "",
    postimage: "",
  });

  const handleCancel = () => {
    navigate("/forum");
  };

  const handlePublish = () => {
    console.log(formdata);
    setFormData({
      title: "",
      description: "",
      postimage: "",
    });
  };
  return (
    <Container
      sx={{
        border: 0.5,
        borderColor: "#ffffff",
        height: "100%",
        background: "white",
      }}
    >
      <Stack
        direction="row"
        spacing={40}
        justifyContent="center"
        alignItems="center"
      >
        <Stack>
          <TextField
            label="Enter the title of the post"
            value={formdata.title}
            onChange={(e) =>
              setFormData({ ...formdata, title: e.target.value })
            }
            sx={{ m: 2 }}
            color="warning"
            fullWidth
          />
          <TextField
            label="fill the describtion of the post"
            color="warning"
            value={formdata.description}
            onChange={(e) =>
              setFormData({ ...formdata, description: e.target.value })
            }
            multiline
            rows={5}
            fullWidth
            title="enter description"
            sx={{ ml: 2, mb: 2 }}
          />
          <Stack ml={2} mb={4} direction="row" spacing={2}>
            <img
              src={formdata.postimage === "" ? Image : formdata.postimage}
              alt="default"
              height={400}
              width={400}
            />
            <Filebase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setFormData({ ...formdata, postimage: base64 })
              }
            />
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            mb={2}
          >
            <Button
              variant="outlined"
              color="warning"
              size="large"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="warning"
              size="large"
              onClick={handlePublish}
            >
              Publish
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default CreatePost;
