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
import image from "../../images/logo2.jpg";

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
          spacing={{ md: 45, lg: 75 }}
          direction={{ xs: "column", sm: "row", lg: "row" }}
          mt={10}
          mb={10}
          ml={5}
        >
          <Stack direction="row">
            <img src={image} alt="logo" width={250} height={70} />
          </Stack>
          <Stack
            direction={{ xs: "row", sm: "row", lg: "row" }}
            spacing={2}
            mt={40}
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
