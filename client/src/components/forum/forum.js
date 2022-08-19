import React from "react";
import {
  Container,
  Button,
  TextField,
  Stack,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import { Link } from "@mui/material";
import { Search } from "@mui/icons-material";

const Forum = () => {
  return (
    <Container maxWidth="md">
      <Stack
        spacing={{ xs: 0, sm: 30, lg: 40 }}
        direction={{ xs: "column", sm: "row", lg: "row", xl: "row" }}
      >
        <Stack
          spacing={{ xs: 1, sm: 2, lg: 2 }}
          direction={{ xs: "row", sm: "row", lg: "row" }}
          m={3}
        >
          <Link href="/" color="white" variant="inherit" underline="hover">
            Category
          </Link>
          <Link
            href="/allposts"
            color="white"
            variant="inherit"
            underline="hover"
          >
            All posts
          </Link>
          <Link
            href="/myposts"
            color="white"
            variant="inherit"
            underline="hover"
          >
            My posts
          </Link>
        </Stack>

        <Stack direction={{ xs: "column", sm: "row", lg: "row" }}>
          <Paper sx={{ background: "#6C3903" }}>
            <TextField
              size="small"
              variant="filled"
              color="warning"
              label="Search"
            />
          </Paper>
        </Stack>
      </Stack>

      <Stack>
        <Typography margin="auto" variant="h1" color="white">
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
