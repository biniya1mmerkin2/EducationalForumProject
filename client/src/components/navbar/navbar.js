import React from "react";
import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  Stack,
  Link,
  Container,
} from "@mui/material";

const NavBar = () => {
  return (
    <AppBar
      position="sticky"
      color="inherit"
      sx={{ background: "#080808", height: 150 }}
    >
      <Toolbar>
        <Stack
          spacing={{ xs: 0, md: 30, lg: 40 }}
          direction={{ xs: "column", sm: "row", lg: "row" }}
          m={10}
        >
          <Stack direction="row">
            <Typography variant="h3" color="white" gutterBottom>
              Educational Forum
            </Typography>
          </Stack>
          <Stack
            direction={{ xs: "row", sm: "row", lg: "row" }}
            spacing={2}
            m={40}
          >
            <Link href="#" underline="none" variant="inherit">
              Home
            </Link>
            <Link href="#" underline="none" variant="inherit">
              Forum
            </Link>
            <Link href="#" underline="none" variant="inherit">
              Members
            </Link>
            <Link href="#" underline="none" variant="inherit">
              Contact
            </Link>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;