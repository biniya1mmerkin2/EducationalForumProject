import React from "react";
import { AppBar, Typography, Button, Toolbar, Stack } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Stack
          spacing={{ xs: 0, md: 30, lg: 40 }}
          direction={{ xs: "column", sm: "row", lg: "row" }}
        >
          <Stack direction="row">
            <Typography variant="h5" gutterBottom>
              Educational Forum
            </Typography>
          </Stack>
          <Stack direction={{ xs: "row", sm: "row", lg: "row" }} spacing={2}>
            <Button> Home</Button>
            <Button> Forum</Button>
            <Button> Members</Button>
            <Button> Contact</Button>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;