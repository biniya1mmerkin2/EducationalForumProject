import React from "react";
import { Container, Stack, Grid, CircularProgress } from "@mui/material";

import RightPart from "./rightPart";
import LeftPart from "./leftPart";
import { useSelector } from "react-redux";

const Post = () => {
  const { post, isloading } = useSelector((state) => state.post);
  const user = useSelector((state) => state.user);
  const {
    title,
    description,
    likes,
    comments,
    userid,
    categoryid,
    postimage,
    dateofpost,
  } = post;
  console.log(post);
  return (
    <Container>
      {!isloading ? (
        // post.map((item) => (
        <Grid container>
          <Grid item lg={9} sm={9}>
            <LeftPart
              title={title}
              description={description}
              likes={likes}
              comments={comments}
              userid={userid}
              categoryid={categoryid}
              postimage={postimage}
              dateofpost={dateofpost}
            />
          </Grid>
          <Grid item lg={3} sm={3}>
            <RightPart />
          </Grid>
        </Grid>
      ) : (
        // ))
        <Stack justifyContent="center" alignItems="center">
          <CircularProgress color="warning" />
        </Stack>
      )}
    </Container>
  );
};

export default Post;
