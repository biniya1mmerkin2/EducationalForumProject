import React, { useEffect } from "react";
import { Container, Stack, Grid, CircularProgress } from "@mui/material";

import RightPart from "./rightPart";
import LeftPart from "./leftPart";
import { useSelector } from "react-redux";

const Post = () => {
  const { post, isloading } = useSelector((state) => state.post);
  const user = useSelector((state) => state.user);
  const {
    _id,
    title,
    description,
    likes,
    comments,
    userid,
    categoryid,
    postimage,
    dateofpost,
  } = post;

  useEffect(() => {});
  // console.log(post);
  return (
    <Container>
      {!isloading && post ? (
        // post.map((item) => (
        <Grid container>
          <Grid item lg={9} md={7} sm={12}>
            <LeftPart
              id={_id}
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
};;

export default Post;
