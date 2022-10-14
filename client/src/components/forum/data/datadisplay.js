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
  Typography,
} from "@mui/material";
import SignUp from "../signup/signup";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Comment, DateRange, Favorite } from "@mui/icons-material";

const DataDisplay = ({ allPosts }) => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userdata"));

  const handleOpen = () => setOpen(true);
  const handleNavigate = () => {
    navigate(`/forum/createpost/${id}`);
  };
  const users = useSelector((state) => state.user.allUser);

  // console.log(users);

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
          <Button
            variant="contained"
            color="warning"
            onClick={() => {
              !user ? handleOpen() : handleNavigate();
            }}
          >
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
              <TableCell sx={{ color: "white" }}></TableCell>
              <TableCell sx={{ color: "chocolate" }}>
                <Favorite color="warning" />
              </TableCell>
              <TableCell sx={{ color: "chocolate" }}>
                <Comment color="warning" />
              </TableCell>
              <TableCell sx={{ color: "chocolate" }}>
                <DateRange />
              </TableCell>
            </TableRow>
          </TableHead>
          {allPosts.length === 0 ? (
            <Typography color="white">
              {" "}
              No posts yet in this catagory you can be the first
            </Typography>
          ) : (
            <TableBody>
              {allPosts.map((items) => (
                <TableRow key={items._id}>
                  <TableCell sx={{ color: "white" }}>
                    {users.map((item) =>
                      item._id === items.userid ? (
                        <Link
                          href="#"
                          className="active"
                          variant="inherit"
                          underline="none"
                          color="chocolate"
                          key={item._id}
                        >
                          {item.email}
                        </Link>
                      ) : (
                        ""
                      )
                    )}
                    <br />
                    <Link
                      href={`/forum/post/${items._id}`}
                      className="active"
                      variant="inherit"
                      underline="none"
                      color={"white"}
                    >
                      {items.description}
                    </Link>
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>
                    {items.likes.length}
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>
                    {items.comments.length}
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>
                    {new Date(items.dateofpost).toDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      <SignUp open={open} setOpen={setOpen} />
    </Container>
  );
};

export default DataDisplay;
