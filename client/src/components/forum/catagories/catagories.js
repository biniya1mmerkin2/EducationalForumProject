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
          {data.map((item) => (
            <Grid item sm={12} md={6} lg={6} xs={12} key={item._id}>
              <Card elevation={6} sx={{ border: 0.5, borderColor: "#ffffff" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.selectedFile}
                />
                <CardContent style={{ background: "#080808" }}>
                  <Typography className="active" variant="h5" color="chocolate">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{
                      height: 50,
                      overflow: "hidden",
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions style={{ background: "#080808" }}>
                  <IconButton>
                    <ArrowForwardIcon color="warning" />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <NewPost />
    </>
  );
};

export default Catagories;
