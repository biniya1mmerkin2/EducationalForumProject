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
  CircularProgress,
  CardActionArea,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import NewPost from "../newpost/newpost";

const Catagories = () => {
  const { posts, isloading } = useSelector((state) => state);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/forum/Catagory/${id}`);
    console.log(id);
  };

  return !isloading ? (
    <>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          {posts.map((item) => (
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
                  <IconButton onClick={() => handleClick(item._id)}>
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
  ) : (
    <Container maxWidth="md">
      <CircularProgress />
    </Container>
  );
};

export default Catagories;
