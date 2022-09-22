import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Stack,
  Link,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import image from "../../images/log.jpg";

const NavBar = () => {
  const navigate = useNavigate();
  const [anchorEl, setanchorEl] = useState(null);
  const { pathname } = useLocation();
  const user = JSON.parse(localStorage.getItem("userdata"));

  const handleMenu = (e) => {
    setanchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setanchorEl(null);
  };

  const handleLogOut = () => {
    localStorage.removeItem("userdata");
    navigate("/forum");
    setanchorEl(null);
  };

  const handleProfile = () => {
    navigate("/profile");
    setanchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      color="inherit"
      sx={{ background: "#080808", height: 150 }}
      elevation={6}
    >
      <Toolbar>
        <Stack
          spacing={{ md: 45, lg: 90 }}
          direction={{ xs: "column", sm: "row", lg: "row" }}
          mt={10}
          mb={10}
          ml={5}
        >
          <Stack direction="row">
            <img src={image} alt="logo" width={250} height={80} />
          </Stack>
          <Stack
            direction={{ xs: "row", sm: "row", lg: "row" }}
            spacing={2}
            mt={40}
          >
            <Stack direction="row" mt="20px" spacing={1}>
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
            </Stack>
            <Stack>
              {user?.result && (
                <IconButton onClick={handleMenu} size="small" sx={{ mt: 1 }}>
                  <Avatar sx={{ background: "#f57c00" }}>
                    {user?.result?.name.charAt(0).toUpperCase()}
                  </Avatar>{" "}
                  <ExpandMoreOutlined color="warning" />
                </IconButton>
              )}
              <Menu
                id="profile"
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem className="active" onClick={handleProfile}>
                  Profile
                </MenuItem>

                <Divider />
                <MenuItem className="active" onClick={handleLogOut}>
                  Logout
                </MenuItem>
              </Menu>
            </Stack>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
