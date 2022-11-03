import React, { useState, useEffect } from "react";
import {
  Container,
  Stack,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import Filebase from "react-file-base64";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePostData, updateSinglePostData } from "../../../action/post";

const EditPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSinglePostData(id));
  }, []);

  const [formdata, setFormData] = useState({
    title: post?.title,
    description: post?.description,
    postimage: post?.postimage,
  });
  const handleCancel = () => {
    navigate("/forum");
  };

  console.log(post);
  const handlePublish = () => {
    //   console.log(formdata);
    dispatch(updateSinglePostData(id, formdata));
    setFormData({
      title: post.title,
      description: post.description,
      postimage: post.postimage,
    });
    navigate("/forum/post");
  };
  return (
    <>
      {post !== null ? (
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
                  Update
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      ) : (
        <CircularProgress color="warning" />
      )}
    </>
  );
};

export default EditPost;
