import React from "react";
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

const DataTable = () => {
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
              <TableCell>Programming </TableCell>
              <TableCell>
                Programming is using computer code Programming the computer{" "}
              </TableCell>
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
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell>Programming </TableCell>
              <TableCell>
                Programming is using computer code Programming the computer{" "}
              </TableCell>
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
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell>Programming </TableCell>
              <TableCell>
                Programming is using computer code Programming the computer{" "}
              </TableCell>
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
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell>Programming </TableCell>
              <TableCell>
                Programming is using computer code Programming the computer{" "}
              </TableCell>
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
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell>Programming </TableCell>
              <TableCell>
                Programming is using computer code Programming the computer{" "}
              </TableCell>
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
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell>Programming </TableCell>
              <TableCell>
                Programming is using computer code Programming the computer{" "}
              </TableCell>
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
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
