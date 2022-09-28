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
  Container,
  Stack,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../action/user";

const MembersData = () => {
  const dispatch = useDispatch();
  const { members, isloading } = useSelector((state) => state.members);
  console.log(members);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <Container sx={{ mt: 1 }}>
      {isloading ? (
        <Stack justifyContent="center" alignItems="center">
          <CircularProgress />
        </Stack>
      ) : (
        <TableContainer component={Paper} elevation={6} sx={{ height: 550 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6" fontWeight="bold">
                    Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" fontWeight="bold">
                    Email
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" fontWeight="bold">
                    Role
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" fontWeight="bold">
                    JoinedDate
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" fontWeight="bold">
                    Detail View
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>
                    {" "}
                    <Typography>{item.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{item.email}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{item.role}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {new Date(item.joindate).toDateString()}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Button variant="outlined" size="small" color="warning">
                      View More
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default MembersData;
