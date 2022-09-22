import React from "react";
import {
  Stack,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
} from "@mui/material";


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
              <Avatar sx={{ background: "#f57c00", mt: "15px" }}>
                {item.name.charAt(0).toUpperCase()}
              </Avatar>
              <Stack>
                <Typography
                  className="active"
                  color="chocolate"
                  mt="10px"
                  ml="10px"
                >
                  {item.name}
                </Typography>
                <Typography className="active" color="white" ml="10px">
                  {item.email}
                </Typography>
              </Stack>
            </Stack>
            <Typography
              color="white"
              variant="h6"
              marginLeft="30px"
              marginTop="10px"
            >
              {item.university}
            </Typography>
            <Typography color="white" marginLeft="100px">
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
