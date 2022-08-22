import React from "react";
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
} from "@mui/material";
import { MoreVertOutlined, Comment, Favorite } from "@mui/icons-material";
const NewPost = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="caption" color={"white"}>
        {" "}
        New Posts
      </Typography>
      <Grid container spacing={2}>
        <Grid item lg={4} sm={6} xs={12}>
          <Card>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: "black" }}>B</Avatar>}
              action={
                <IconButton>
                  <MoreVertOutlined />
                </IconButton>
              }
              title="Programming"
              subheader="biniyammerkin30@gmail.com"
            />
            <CardContent>
              <Typography paragraph>
                {" "}
                My question is how to fetch data from the array in objects?
              </Typography>
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
        <Grid item lg={4} sm={6} xs={12}>
          <Card>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: "black" }}>B</Avatar>}
              action={
                <IconButton>
                  <MoreVertOutlined />
                </IconButton>
              }
              title="Programming"
              subheader="biniyammerkin30@gmail.com"
            />
            <CardContent>
              <Typography paragraph>
                {" "}
                My question is how to fetch data from the array in objects?
              </Typography>
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
        <Grid item lg={4} sm={6} xs={12}>
          <Card>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: "black" }}>B</Avatar>}
              action={
                <IconButton>
                  <MoreVertOutlined />
                </IconButton>
              }
              title="Programming"
              subheader="biniyammerkin30@gmail.com"
            />
            <CardContent>
              <Typography paragraph>
                {" "}
                My question is how to fetch data from the array in objects?
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <Comment />
              </IconButton>
              <IconButton>
                <Favorite sx={{ color: "#B5081B" }} />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewPost;
