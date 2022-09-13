import React, { useEffect } from "react";
import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  Stack,
  Link,
  Avatar,
} from "@mui/material";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();
  const user = JSON.parse(localStorage.getItem("userdata"));

  return (
    <AppBar
      position="sticky"
      color="inherit"
      sx={{ background: "#080808", height: 150 }}
      elevation={6}
    >
      <Toolbar>
        <Stack
          spacing={{ xs: 0, md: 60, lg: 70 }}
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
              href="/contact"
              color={pathname === "/contact" ? "GrayText" : "white"}
              underline="none"
              variant="inherit"
            >
              SignUp
            </Link>

            {user && (
              <Stack direction="row">
                <Avatar sx={{ background: "#f57c00" }}>
                  {user?.result?.name.charAt(0).toUpperCase()}
                </Avatar>{" "}
              </Stack>
            )}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
