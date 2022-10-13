import React, { useEffect } from "react";
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

  useEffect(() => {
    console.log(likes);
  });
  return (
    <Container>
      {!isloading && post ? (
        // post.map((item) => (
        <Grid container>
          <Grid item lg={9} md={7} sm={12}>
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
          <Grid item lg={3} md={5} sm={12}>
            <RightPart likes={likes} comments={comments} userid={userid} />
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
