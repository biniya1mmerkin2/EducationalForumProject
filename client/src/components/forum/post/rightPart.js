import { Stack, Button, Box, Typography, Link } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { similarpost } from "../../../action/post";

const RightPart = ({ likes, comments, userid, categoryid }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("userdata"));
  const { similarposts } = useSelector((state) => state.post);

  const handleClick = () => {
    navigate("/forum");
  };

  useEffect(() => {
    dispatch(similarpost(categoryid));
  }, []);
  // console.log(similarposts);
  return (
    <Stack mt={3}>
      <Button variant="contained" color="warning" size="large">
        View Profile
      </Button>

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
        {similarposts.length > 0 ? (
          <>
            {similarposts.map((item) => (
              <Typography className="active" color="white" key={item._id}>
                {item.description}
              </Typography>
            ))}
          </>
        ) : (
          <Typography className="active" color="white">
            No similar posts found
          </Typography>
        )}
      </Box>
    </Stack>
  );
};

export default RightPart;
