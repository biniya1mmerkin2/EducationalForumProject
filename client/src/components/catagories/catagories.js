import React from "react";
import {
  Container,
  Typography,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import { Image } from "../../images/image2.jpg";

const Catagories = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item lg={6}>
          <Card elevation={12} sx={{ border: 0.5, borderColor: "#ffffff" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
            />
            <CardContent style={{ background: "#080808" }}>
              <Typography variant="h6" color="white">
                Programming
              </Typography>
              <Typography variant="body1" color="white">
                Computer programming is the process of performing a particular
                computation, usually by designing and building an executable
                computer program.
              </Typography>
            </CardContent>
            <CardActions style={{ background: "#080808" }}>
              <Button size="small" variant="contained">
                Join Forum
              </Button>
              <Button size="small" variant="contained">
                See More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={6}>
          <Card elevation={6} sx={{ border: 0.5, borderColor: "#ffffff" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
            />
            <CardContent style={{ background: "#080808" }}>
              <Typography variant="h6" color="white">
                Programming
              </Typography>
              <Typography variant="body1" color="white">
                Computer programming is the process of performing a particular
                computation, usually by designing and building an executable
                computer program.
              </Typography>
            </CardContent>
            <CardActions style={{ background: "#080808" }}>
              <Button size="small" variant="contained">
                Join Forum
              </Button>
              <Button size="small" variant="contained">
                See More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={6}>
          <Card elevation={6} sx={{ border: 0.5, borderColor: "#ffffff" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
            />
            <CardContent style={{ background: "#080808" }}>
              <Typography variant="h6" color="white">
                Programming
              </Typography>
              <Typography variant="body1" color="white">
                Computer programming is the process of performing a particular
                computation, usually by designing and building an executable
                computer program.
              </Typography>
            </CardContent>
            <CardActions style={{ background: "#080808" }}>
              <Button size="small" variant="contained">
                Join Forum
              </Button>
              <Button size="small" variant="contained">
                See More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={6}>
          <Card elevation={6} sx={{ border: 0.5, borderColor: "#ffffff" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
            />
            <CardContent style={{ background: "#080808" }}>
              <Typography variant="h6" color="white">
                Programming
              </Typography>
              <Typography variant="body1" color="white">
                Computer programming is the process of performing a particular
                computation, usually by designing and building an executable
                computer program.
              </Typography>
            </CardContent>
            <CardActions style={{ background: "#080808" }}>
              <Button size="small" variant="contained">
                Join Forum
              </Button>
              <Button size="small" variant="contained">
                See More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={6}>
          <Card elevation={6} sx={{ border: 0.5, borderColor: "#ffffff" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
            />
            <CardContent style={{ background: "#080808" }}>
              <Typography variant="h6" color="white">
                Programming
              </Typography>
              <Typography variant="body1" color="white">
                Computer programming is the process of performing a particular
                computation, usually by designing and building an executable
                computer program.
              </Typography>
            </CardContent>
            <CardActions style={{ background: "#080808" }}>
              <Button size="small" variant="contained">
                Join Forum
              </Button>
              <Button size="small" variant="contained">
                See More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={6}>
          <Card elevation={6} sx={{ border: 0.5, borderColor: "#ffffff" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
            />
            <CardContent style={{ background: "#080808" }}>
              <Typography variant="h6" color="white">
                Programming
              </Typography>
              <Typography variant="body1" color="white">
                Computer programming is the process of performing a particular
                computation, usually by designing and building an executable
                computer program.
              </Typography>
            </CardContent>
            <CardActions style={{ background: "#080808" }}>
              <Button size="small" variant="contained">
                Join Forum
              </Button>
              <Button size="small" variant="contained">
                See More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Catagories;
