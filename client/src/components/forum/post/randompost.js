import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePostData } from "../../../action/post";
import { CircularProgress, Container, Grid } from "@mui/material";
import LeftPart from "./leftPart";
import RightPart from "./rightPart";

const RandomPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);
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

  useEffect(() => {
    dispatch(getSinglePostData(id));
    // console.log(post);
  });

  

  return (
    <Container>
      {post.length !== 0 ? (
        <Grid container>
          <Grid item lg={9} sm={9}>
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
          <Grid item lg={3} sm={3}>
            <RightPart likes={likes} comments={comments} userid={userid} />
          </Grid>
        </Grid>
      ) : (
        <CircularProgress color="warning" />
      )}
    </Container>
  );
};

export default RandomPost;
