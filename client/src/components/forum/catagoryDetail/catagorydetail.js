import React from "react";
import { Container, Typography, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import DataDisplay from "../data/datadisplay";

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

      <DataDisplay />
    </Container>
  );
};

export default CatagoryDetails;
