import React from "react";
import { Grid, Container } from "@mui/material";
import Form from "./form/form";
import DataTable from "./datatable/datatable";

const PostCatagory = () => {
  return (
    <Container maxWidth={"lg"} sx={{ mt: 3 }}>
      <Grid container>
        <Grid item sm={8} lg={9}>
          <DataTable />
        </Grid>
        <Grid item sm={4} lg={3}>
          <Form />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostCatagory;
