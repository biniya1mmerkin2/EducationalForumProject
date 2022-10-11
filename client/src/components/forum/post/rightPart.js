import { Stack, Button, Box, Typography, Link } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const RightPart = ({ likes, comments, userid }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userdata"));

  const handleClick = () => {
    navigate("/forum");
  };

  console.log(user?.result?._id);
  return (
    <Stack mt={3}>
      {user?.result?._id === userid ? (
        <Button variant="contained" color="warning" size="large">
          Edit Post
        </Button>
      ) : (
        ""
      )}

      <Button
        variant="outlined"
        color="warning"
        size="large"
        sx={{ mt: 3 }}
        onClick={handleClick}
      >
        forum catagory
      </Button>

      <Box sx={{ border: 0.5, color: "#ffffff", padding: 3 }} mt={10}>
        <Typography color="white">{likes.length} likes</Typography>
        <Typography color="white">{comments.length} comment</Typography>
      </Box>

      <Box sx={{ border: 0.5, color: "#ffffff", padding: 1 }} mt={5}>
        <Typography color="chocolate">similar posts</Typography>
        <Typography className="active" color="white">
          how to can i use foreach loop?
        </Typography>
        <Typography className="active" color="white">
          how to fetch data from object?
        </Typography>
        <Typography className="active" color="white">
          how to install new package in react?
        </Typography>
        <Typography className="active" color="white">
          how to uninstall a package in react?
        </Typography>
        <Typography className="active" color="white">
          how to use express in node js project?
        </Typography>
      </Box>
    </Stack>
  );
};

export default RightPart;
