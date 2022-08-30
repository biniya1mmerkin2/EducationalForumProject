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
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const DataTable = () => {
  const data = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(data);
  });

  return (
    <>
      <TableContainer component={Paper} elevation={6}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">PostTitle</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">PostDescriptions</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Delete Action</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Edit Action</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {data &&
                data.map((item) => (
                  <TableRow>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>
                      <Button variant="contained" size="small" color="error">
                        Delte
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" size="small" color="success">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
