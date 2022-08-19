import React from "react";
import { AppBar, Typography, Button, Toolbar, Stack } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="sticky" color="inherit" sx={{ background: "#1B1B1A" }}>
      <Toolbar>
        <Stack
          spacing={{ xs: 0, md: 30, lg: 40 }}
          direction={{ xs: "column", sm: "row", lg: "row" }}
        >
          <Stack direction="row">
            <Typography variant="h4" color="white" gutterBottom>
              Educational Forum
            </Typography>
          </Stack>
          <Stack direction={{ xs: "row", sm: "row", lg: "row" }} spacing={2}>
            <Button color="warning"> Home</Button>
            <Button color="warning"> Forum</Button>
            <Button color="warning"> Members</Button>
            <Button color="warning"> Contact</Button>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;