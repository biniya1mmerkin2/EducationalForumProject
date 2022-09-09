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
  Modal,
  Typography,
  Box,
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
} from "@mui/material";
import SignUp from "../signup/signup";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DataDisplay = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Stack>
            <Stack justifyContent={"center"} alignItems="center">
              <Typography
                gutterBottom
                fontWeight={"bold"}
                variant="h4"
                color="chocolate"
              >
                Sign Up
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={2}>
              <TextField label="First Name" name="firstname" />
              <TextField label="Last Name" name="lastname" />
            </Stack>
            <Stack mt={1}>
              <TextField label="Email" name="email" sx={{ mb: 1 }} />
              <TextField
                type={"password"}
                label="Password"
                name="password"
                sx={{ mb: 1 }}
              />
              <TextField
                type={"password"}
                label="ConfirmPassword"
                name="confirmpassword"
                sx={{ mb: 1 }}
              />
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="show password" edge="end">
                      <VisibilityOff />
                    </IconButton>
                  </InputAdornment>
                }
                // label="Enterpassword"
              />
              <Button variant="contained" color="warning" fullWidth>
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </Container>
  );
};

export default DataDisplay;
