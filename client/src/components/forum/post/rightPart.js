import { Stack, Button, Box, Typography } from "@mui/material";
import React from "react";

const RightPart = () => {
  return (
    <Stack mt={3}>
      <Button variant="contained" color="warning" size="large">
        Comment
      </Button>

      <Button variant="outlined" color="warning" size="large" sx={{ mt: 3 }}>
        following post
      </Button>

      <Box sx={{ border: 0.5, color: "#ffffff", padding: 3 }} mt={10}>
        <Typography color="white">5 likes</Typography>
        <Typography color="white">0 comment</Typography>
      </Box>

      <Box sx={{ border: 0.5, color: "#ffffff", padding: 1 }} mt={5}>
        <Typography color="chocolate">similar posts</Typography>
        <Typography className="active" color="white">
          how to can i use foreach loop?
        </Typography>
        <Typography className="active" color="white">
          how to fetch data from object?
        </Typography>
        <Typography className="active" color="white">
          how to install new package in react?
        </Typography>
        <Typography className="active" color="white">
          how to uninstall a package in react?
        </Typography>
        <Typography className="active" color="white">
          how to use express in node js project?
        </Typography>
      </Box>
    </Stack>
  );
};

export default RightPart;
