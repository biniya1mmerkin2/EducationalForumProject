import React from "react";
import {
  Container,
  Typography,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Grid,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSelector } from "react-redux";

import NewPost from "../newpost/newpost";

const Catagories = () => {
  const data = useSelector((state) => state.posts);
  console.log(data);
  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item sm={6} md={6} lg={6} xs={12}>
            <Card elevation={6} sx={{ border: 0.5, borderColor: "#ffffff" }}>
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/200/300"
              />
              <CardContent style={{ background: "#080808" }}>
                <Typography className="active" variant="h5" color="chocolate">
                  Programming
                </Typography>
                <Typography variant="body2" color="white">
                  Computer programming is the process of performing a particular
                  computation, usually by designing and building an executable
                  computer program.
                </Typography>
              </CardContent>
              <CardActions style={{ background: "#080808" }}>
                <IconButton>
                  <ArrowForwardIcon color="warning" />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={6} md={6} lg={6} xs={12}>
            <Card elevation={6} sx={{ border: 0.5, borderColor: "#ffffff" }}>
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/200/300"
              />
              <CardContent style={{ background: "#080808" }}>
                <Typography className="active" variant="h5" color="chocolate">
                  Programming
                </Typography>
                <Typography variant="body2" color="white">
                  Computer programming is the process of performing a particular
                  computation, usually by designing and building an executable
                  computer program.
                </Typography>
              </CardContent>
              <CardActions style={{ background: "#080808" }}>
                <IconButton>
                  <ArrowForwardIcon color="warning" />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={6} md={6} lg={6} xs={12}>
            <Card elevation={6} sx={{ border: 0.5, borderColor: "#ffffff" }}>
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/200/300"
              />
              <CardContent style={{ background: "#080808" }}>
                <Typography className="active" variant="h5" color="chocolate">
                  Programming
                </Typography>
                <Typography variant="body2" color="white">
                  Computer programming is the process of performing a particular
                  computation, usually by designing and building an executable
                  computer program.
                </Typography>
              </CardContent>
              <CardActions style={{ background: "#080808" }}>
                <IconButton>
                  <ArrowForwardIcon color="warning" />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={6} md={6} lg={6} xs={12}>
            <Card elevation={6} sx={{ border: 0.5, borderColor: "#ffffff" }}>
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/200/300"
              />
              <CardContent style={{ background: "#080808" }}>
                <Typography className="active" variant="h5" color="chocolate">
                  Programming
                </Typography>
                <Typography variant="body2" color="white">
                  Computer programming is the process of performing a particular
                  computation, usually by designing and building an executable
                  computer program.
                </Typography>
              </CardContent>
              <CardActions style={{ background: "#080808" }}>
                <IconButton>
                  <ArrowForwardIcon color="warning" />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={6} md={6} lg={6} xs={12}>
            <Card elevation={6} sx={{ border: 0.5, borderColor: "#ffffff" }}>
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/200/300"
              />
              <CardContent style={{ background: "#080808" }}>
                <Typography className="active" variant="h5" color="chocolate">
                  Programming
                </Typography>
                <Typography variant="body2" color="white">
                  Computer programming is the process of performing a particular
                  computation, usually by designing and building an executable
                  computer program.
                </Typography>
              </CardContent>
              <CardActions style={{ background: "#080808" }}>
                <IconButton>
                  <ArrowForwardIcon color="warning" />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={6} md={6} lg={6} xs={12}>
            <Card elevation={6} sx={{ border: 0.5, borderColor: "#ffffff" }}>
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/200/300"
              />
              <CardContent style={{ background: "#080808" }}>
                <Typography className="active" variant="h5" color="chocolate">
                  Programming
                </Typography>
                <Typography variant="body2" color="white">
                  Computer programming is the process of performing a particular
                  computation, usually by designing and building an executable
                  computer program.
                </Typography>
              </CardContent>
              <CardActions style={{ background: "#080808" }}>
                <IconButton>
                  <ArrowForwardIcon color="warning" />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <NewPost />
    </>
  );
};

export default Catagories;
