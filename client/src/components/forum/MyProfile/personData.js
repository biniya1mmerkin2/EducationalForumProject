import React from "react";
import {
  Stack,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
} from "@mui/material";
import { ClassNames } from "@emotion/react";

const PersonData = ({ result }) => {
  const { email, name, role, followers, following, university } = result;
  console.log(followers);
  return (
    <>
      <Card elevation={6} sx={{ border: 0.5, borderColor: "#ffffff" }}>
        <CardContent style={{ background: "#080808" }}>
          <Stack direction="row">
            <Avatar sx={{ background: "#f57c00", mt: "15px" }}>B</Avatar>
            <Stack>
              <Typography
                className="active"
                color="chocolate"
                mt="10px"
                ml="10px"
              >
                {name}
              </Typography>
              <Typography className="active" color="white" ml="10px">
                {email}
              </Typography>
            </Stack>
          </Stack>
          <Typography
            color="white"
            variant="h6"
            marginLeft="30px"
            marginTop="10px"
          >
            {university === "" ? "" : university}
          </Typography>
          <Typography color="white" marginLeft="100px">
            role:{role}
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
              <Button color="warning">{followers.length}</Button>
            </Stack>
            <Stack alignItems="center" justifyContent="center">
              <Typography color="white" className="active">
                Following
              </Typography>
              <Button color="warning">{following.length}</Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default PersonData;
