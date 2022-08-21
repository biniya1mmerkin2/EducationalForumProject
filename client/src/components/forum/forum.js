import React from "react";
import {
  Container,
  TextField,
  Stack,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { Link } from "@mui/material";
import { useLocation } from "react-router-dom";

const Forum = () => {
  const { pathname } = useLocation();
  return (
    <Container maxWidth="lg" sx={{ height: 300 }}>
      <Stack
        spacing={{ xs: 0, sm: 30, lg: 80 }}
        direction={{ xs: "column", sm: "row", lg: "row", xl: "row" }}
      >
        <Stack
          spacing={{ xs: 1, sm: 2, lg: 2 }}
          direction={{ xs: "row", sm: "row", lg: "row" }}
          m={3}
        >
          <Link
            className="active"
            href="/forum"
            color={pathname !== "/forum" ? "white" : "chocolate"}
            variant="inherit"
            underline="none"
          >
            Category
          </Link>
          <Link
            className="active"
            href="/forum/allposts"
            color={pathname !== "/forum/allposts" ? "white" : "chocolate"}
            variant="inherit"
            underline="none"
          >
            All posts
          </Link>
          <Link
            className="active"
            href="/forum/myposts"
            color={pathname !== "/forum/myposts" ? "white" : "chocolate"}
            variant="inherit"
            underline="none"
          >
            My posts
          </Link>
        </Stack>

        <Stack direction={{ xs: "column", sm: "row", lg: "row" }}>
          {/* <Paper sx={{ background: "#6C3903" }}> */}
          <Box sx={{ background: "#6C3903", height: 49 }}>
            <TextField
              size="small"
              variant="filled"
              color="warning"
              label="Search"
            />
          </Box>

          {/* </Paper> */}
        </Stack>
      </Stack>
      <Divider sx={{ background: "#FBFBEC" }} />

      <Stack>
        <Typography margin="auto" variant="h2" color="white">
          Your Forum
        </Typography>
        <Typography margin="auto" variant="body1" color="white">
          Share your Question to others
        </Typography>
      </Stack>
    </Container>
  );
};

export default Forum;
