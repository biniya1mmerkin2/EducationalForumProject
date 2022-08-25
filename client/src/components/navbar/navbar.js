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
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <AppBar
      position="sticky"
      color="inherit"
      sx={{ background: "#080808", height: 150 }}
      elevation={6}
    >
      <Toolbar>
        <Stack
          spacing={{ xs: 0, md: 30, lg: 40 }}
          direction={{ xs: "column", sm: "row", lg: "row" }}
          m={10}
        >
          <Stack direction="row">
            <Typography variant="h4" color="white" gutterBottom>
              Educational Forum
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
              color={pathname === "/" ? "GrayText" : "white"}
              underline="none"
              variant="inherit"
            >
              Home
            </Link>
            <Link
              className="navlink"
              href="/forum"
              color={pathname === "/forum" ? "GrayText" : "white"}
              underline="none"
              variant="inherit"
            >
              Forum
            </Link>
            <Link
              className="navlink"
              href="/members"
              color={pathname === "/members" ? "GrayText" : "white"}
              underline="none"
              variant="inherit"
            >
              Members
            </Link>
            <Link
              className="navlink"
              href="/postCatagory"
              color={pathname === "/postCatagory" ? "GrayText" : "white"}
              underline="none"
              variant="inherit"
            >
              Post
            </Link>
            <Link
              className="navlink"
              href="/contact"
              color={pathname === "/contact" ? "GrayText" : "white"}
              underline="none"
              variant="inherit"
            >
              SiteRule
            </Link>
            <Link
              className="navlink"
              href="/contact"
              color={pathname === "/contact" ? "GrayText" : "white"}
              underline="none"
              variant="inherit"
            >
              SignIn
            </Link>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;