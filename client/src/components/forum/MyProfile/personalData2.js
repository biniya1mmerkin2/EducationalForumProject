import React from "react";
import {
  Stack,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
} from "@mui/material";
const PersonalData2 = () => {
  return (
    <>
      {" "}
      <Card elevation={6} sx={{ border: 0.5, borderColor: "#ffffff", mt: 3 }}>
        <CardContent style={{ background: "#080808" }}>
          <Stack>
            <Typography color="chocolate" mt="10px" ml="10px">
              Forum posts 3
            </Typography>
            <Typography color="white" mt="10px" ml="10px">
              Comments 3
            </Typography>
            <Typography color="white" mt="10px" ml="10px">
              Likes 1
            </Typography>
            <Typography color="white" mt="10px" ml="10px">
              Notifications 5
            </Typography>
            <Typography color="white" mt="10px" ml="10px">
              My Account
            </Typography>
            <Typography color="white" mt="10px" ml="10px">
              Setting
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default PersonalData2;
