import React, { useEffect } from "react";
import { Container, Typography, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DataDisplay from "../data/datadisplay";

import { allPost } from "../../../action/post";

const CatagoryDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const posts = useSelector((state) =>
    state.reducer.posts.find((item) => item._id === id)
  );
  const allposts = useSelector((state) => state.post.allposts);

  useEffect(() => {
    dispatch(allPost(id));
  }, []);

  // console.log(allposts);
  return (
    <Container>
      <Stack>
        <img
          src={posts.selectedFile}
          alt={posts.title}
          height="300"
          className="img-zindex"
        />
      </Stack>
      <Stack>
        <Typography
          color={"chocolate"}
          position="absolute"
          top={200}
          left={"20%"}
          variant="h1"
          className="text-zindex"
        >
          {posts.title}
        </Typography>
        <Typography
          color={"white"}
          position="absolute"
          top={300}
          left={"20%"}
          right={"20%"}
          variant="h6"
          className="text-zindex"
        >
          {posts.description}
        </Typography>
      </Stack>

      <DataDisplay allPosts={allposts} />
    </Container>
  );
};

export default CatagoryDetails;
