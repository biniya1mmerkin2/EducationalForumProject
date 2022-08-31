import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useSelector } from "react-redux";

const DataTable = ({ setIdToUpdate }) => {
  const { posts, isloading } = useSelector((state) => state);

  useEffect(() => {
    console.log(isloading);
  }, []);

  const test = (id) => {
    console.log("test");
  };

  return !isloading ? (
    <>
      <TableContainer component={Paper} elevation={6}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Title</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Descriptions</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Image</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Delete</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Edit</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts &&
              posts.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>
                    {" "}
                    <Typography>{item.title}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{item.description}</Typography>
                  </TableCell>
                  <TableCell>
                    <img
                      src={item.selectedFile}
                      alt={item.title}
                      width={100}
                      height={100}
                    />
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" size="small" color="error">
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      size="small"
                      color="success"
                      onClick={() => setIdToUpdate(item._id)}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  ) : (
    <CircularProgress />
  );
};

export default DataTable;
