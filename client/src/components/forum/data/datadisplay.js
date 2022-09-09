import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  Container,
  TableCell,
  Stack,
  Button,
  TableRow,
  Divider,
  Link,
} from "@mui/material";
import SignUp from "../signup/signup";

const DataDisplay = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <Container
      maxWidth="lg"
      sx={{
        border: 1,
        borderColor: "white",
        height: "100%",
        mt: 5,
      }}
    >
      <Stack direction={"row"} justifyContent="flex-end" m={1}>
        <Stack direction={"row"}>
          <Button variant="contained" color="warning" onClick={handleOpen}>
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
              <TableCell sx={{ color: "white" }}>
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"#b3b0ae"}
                >
                  biniyammerkin30@gmail.com
                </Link>
                <br />
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"white"}
                >
                  what must i have to be a programmer?
                </Link>
              </TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ color: "white" }}>
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"#b3b0ae"}
                >
                  biniyammerkin30@gmail.com
                </Link>
                <br />
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"white"}
                >
                  what must i have to be a programmer?
                </Link>
              </TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"#b3b0ae"}
                >
                  biniyammerkin30@gmail.com
                </Link>
                <br />
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"white"}
                >
                  what must i have to be a programmer?
                </Link>
              </TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"#b3b0ae"}
                >
                  biniyammerkin30@gmail.com
                </Link>
                <br />
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"white"}
                >
                  what must i have to be a programmer?
                </Link>
              </TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"#b3b0ae"}
                >
                  biniyammerkin30@gmail.com
                </Link>
                <br />
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"white"}
                >
                  what must i have to be a programmer?
                </Link>
              </TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"#b3b0ae"}
                >
                  biniyammerkin30@gmail.com
                </Link>
                <br />
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"white"}
                >
                  what must i have to be a programmer?
                </Link>
              </TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"#b3b0ae"}
                >
                  biniyammerkin30@gmail.com
                </Link>
                <br />
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"white"}
                >
                  what must i have to be a programmer?
                </Link>
              </TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"#b3b0ae"}
                >
                  biniyammerkin30@gmail.com
                </Link>
                <br />
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"white"}
                >
                  what must i have to be a programmer?
                </Link>
              </TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"#b3b0ae"}
                >
                  biniyammerkin30@gmail.com
                </Link>
                <br />
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"white"}
                >
                  what must i have to be a programmer?
                </Link>
              </TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"#b3b0ae"}
                >
                  biniyammerkin30@gmail.com
                </Link>
                <br />
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"white"}
                >
                  what must i have to be a programmer?
                </Link>
              </TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"#b3b0ae"}
                >
                  biniyammerkin30@gmail.com
                </Link>
                <br />
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"white"}
                >
                  what must i have to be a programmer?
                </Link>
              </TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"#b3b0ae"}
                >
                  biniyammerkin30@gmail.com
                </Link>
                <br />
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"white"}
                >
                  what must i have to be a programmer?
                </Link>
              </TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "white" }}>
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"#b3b0ae"}
                >
                  biniyammerkin30@gmail.com
                </Link>
                <br />
                <Link
                  href="#"
                  className="active"
                  variant="inherit"
                  underline="none"
                  color={"white"}
                >
                  what must i have to be a programmer?
                </Link>
              </TableCell>
              <TableCell sx={{ color: "white" }}>Merkin</TableCell>
              <TableCell sx={{ color: "white" }}>23</TableCell>
              <TableCell sx={{ color: "white" }}>
                Addis Abeba, Ethiopia
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <SignUp open={open} setOpen={setOpen} />
    </Container>
  );
};

export default DataDisplay;
