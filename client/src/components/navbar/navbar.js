import React from "react";
import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  Stack,
  Link,
} from "@mui/material";

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
          <Stack
            direction={{ xs: "row", sm: "row", lg: "row" }}
            sx={{ marginTop: 10 }}
            spacing={2}
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