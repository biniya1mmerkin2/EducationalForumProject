import React from "react";
import {
  Stack,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
  CardMedia,
} from "@mui/material";
import Image from "../../../images/defaultprofile.jpg";

const PersonData = ({ result }) => {
  return (
    <>
      {result.map((item) => (
        <Card
          elevation={6}
          sx={{ border: 0.5, borderColor: "#ffffff" }}
          key={item._id}
        >
          <CardContent style={{ background: "#080808" }}>
            <Stack direction="row">
              <CardMedia
                component="img"
                sx={{ borderRadius: "50%" }}
                height="140"
                width="140"
                image={item.profilePic !== "" ? item.profilePic : Image}
              />
            </Stack>
            <Typography color="white" variant="h6" marginTop="10px">
              {item.name}
            </Typography>
            <Typography color="white" marginLeft="60px">
              {item.role}
            </Typography>
            <Stack
              direction="row"
              mt="20px"
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Stack>
                <Typography color="white" className="active">
                  Followers
                </Typography>
                <Button color="warning" variant="contained">
                  {item.followers.length}
                </Button>
              </Stack>
              <Stack alignItems="center" justifyContent="center">
                <Typography color="white" className="active">
                  Following
                </Typography>
                <Button color="warning" variant="contained">
                  {item.following.length}
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default PersonData;
