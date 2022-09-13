import React from "react";
import {
  Container,
  Typography,
  Stack,
  Button,
  Divider,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const MyPosts = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        border: 1,
        borderColor: "white",
        height: 800,
      }}
    >
      <Stack direction={"row"} spacing={38} m={1}>
        <Stack>
          <Typography variant="body1" color={"white"}>
            sort by:Recently Activity
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <Button variant="outlined" color="warning">
            {" "}
            Mark all as Read
          </Button>
          <Button variant="contained" color="warning">
            {" "}
            Create New Post
          </Button>
        </Stack>
      </Stack>
      <Divider sx={{ border: 0.5, borderColor: "white", margin: 0 }} />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Biniyam</TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Biniyam</TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Biniyam</TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Biniyam</TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Biniyam</TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Biniyam</TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Biniyam</TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Biniyam</TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Biniyam</TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Biniyam</TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Biniyam</TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Biniyam</TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Biniyam</TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default MyPosts;
