import React from "react";
import { Container, Stack, Typography, Button, Divider } from "@mui/material";

const PersonDetail = ({ result }) => {
  
  
  return (
    <Container
      maxWidth="xl"
      sx={{ border: 0.5, borderColor: "#ffffff", height: "100%" }}
    >
      {result.map((item) => (
        <Stack>
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={50}
          >
            <Stack>
              <Typography
                color="white"
                variant="h2"
                fontWeight="700"
                mt="10px"
                mb="10px"
              >
                Profile
              </Typography>

              <Typography color="white" mb="10px">
                join date: {new Date(item.joindate).toDateString()}
              </Typography>
            </Stack>
            <Button variant="outlined" color="warning">
              Edit Profile
            </Button>
          </Stack>
          <Divider sx={{ border: 0.5, borderColor: "whitesmoke" }} />
          <Typography
            color="white"
            variant="h4"
            fontWeight="700"
            mt="20px"
            mb="10px"
          >
            About
          </Typography>
          <Stack direction="row" spacing={2}>
            <Typography color="white" mb="10px" variant="body2">
              4 likes Recived
            </Typography>
            <Typography color="white" mb="10px" variant="body2">
              4 comments Recived
            </Typography>
            <Typography color="white" mb="10px" variant="body2">
              4 best answer Recived
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Container>
  );
};

export default PersonDetail;
