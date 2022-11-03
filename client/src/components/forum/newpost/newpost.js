import React, { useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Avatar,
  IconButton,
  CardActions,
  Grid,
  CircularProgress,
} from "@mui/material";
import { MoreVertOutlined, Comment, Favorite } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { getLatestPosts } from "../../../action/post";
const NewPost = () => {
  const latestPost = useSelector((state) => state.post.latestpost);
  const allUser = useSelector((state) => state.user.allUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestPosts());
  }, []);

  // console.log(allUser);
  return (
    <Container maxWidth="md" sx={{ borderRadius: 50, border: 5 }}>
      <Typography variant="caption" color={"white"} mt="40px">
        {" "}
        New Posts
      </Typography>
      {latestPost.length > 0 ? (
        <Grid container spacing={2}>
          {latestPost.map((item) => (
            <Grid item lg={4} sm={6} xs={12} key={item._id}>
              <Card>
                {allUser.map((useritem) =>
                  useritem._id === item.userid ? (
                    <CardHeader
                      avatar={<Avatar sx={{ bgcolor: "black" }}>B</Avatar>}
                      action={
                        <IconButton>
                          <MoreVertOutlined />
                        </IconButton>
                      }
                      key={useritem._id}
                      title={item.title}
                      subheader={useritem.email}
                    />
                  ) : (
                    ""
                  )
                )}
                <CardContent sx={{ height: 100, overflow: "hidden" }}>
                  <Typography paragraph>{item.description}</Typography>
                </CardContent>
                <CardActions>
                  <Divider sx={{ bgcolor: "white" }} />
                  <IconButton>
                    <Comment />
                  </IconButton>
                  <IconButton>
                    <Favorite sx={{ color: "#B5081B" }} />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress color="warning" />
      )}
    </Container>
  );
};

export default NewPost;
