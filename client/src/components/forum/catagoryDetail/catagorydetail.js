import React from "react";
import { Container, Typography, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CatagoryDetails = () => {
  const { id } = useParams();
  const posts = useSelector((state) =>
    state.posts.find((item) => item._id === id)
  );

  console.log(posts);
  return (
    <Container>
      <Stack>
        <img
          src={posts.selectedFile}
          alt={posts.title}
          height="300"
          style={{ position: "relative", zIndex: "-100" }}
        />
      </Stack>
      <Stack>
        <Typography
          color={"chocolate"}
          position="absolute"
          top={200}
          left={"20%"}
          variant="h1"
          zIndex={2}
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
          zIndex={5}
        >
          {posts.description}
        </Typography>
      </Stack>
    </Container>
  );
};

export default CatagoryDetails;
