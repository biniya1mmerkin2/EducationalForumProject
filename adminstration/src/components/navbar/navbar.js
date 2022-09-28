import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { useLocation } from "react-router-dom";
const NavBar = () => {
  //   const { pathname } = useLocation();
  useEffect(() => {
    console.log("hi am navbar");
  });
  return (
    <AppBar
      position="sticky"
      color="inherit"
      sx={{ background: "#F3F4F0", height: 150 }}
      elevation={6}
    >
      <Toolbar>
        <Stack
          spacing={{ xs: 0, md: 30, lg: 40 }}
          direction={{ xs: "column", sm: "row", lg: "row" }}
          m={10}
        >
          <Stack direction="row">
            <Typography variant="h4" gutterBottom>
              Educational Forum Admin Panal
            </Typography>
          </Stack>
          <Stack
            direction={{ xs: "row", sm: "row", lg: "row" }}
            spacing={2}
            m={40}
          >
            <Link
              className="navlink"
              href="/"
              underline="none"
              variant="inherit"
            >
              Home
            </Link>
            <Link
              className="navlink"
              href="/post"
              underline="none"
              variant="inherit"
            >
              Catagory
            </Link>
            <Link
              className="navlink"
              href="/members"
              underline="none"
              variant="inherit"
            >
              Members
            </Link>
            <Link
              className="navlink"
              href="/postCatagory"
              underline="none"
              variant="inherit"
            >
              Post
            </Link>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
