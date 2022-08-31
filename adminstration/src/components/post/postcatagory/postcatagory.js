import React, { useState, useEffect } from "react";
import { Grid, Container } from "@mui/material";
import Form from "./form/form";
import DataTable from "./datatable/datatable";

const PostCatagory = () => {
  const [idToUpdate, setIdToUpdate] = useState(null);

  return (
    <Container maxWidth={"lg"} sx={{ mt: 3 }}>
      <Grid container>
        <Grid item sm={8} lg={9}>
          <DataTable setIdToUpdate={setIdToUpdate} />
        </Grid>
        <Grid item sm={4} lg={3}>
          <Form idToUpdate={idToUpdate} setIdToUpdate={setIdToUpdate} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostCatagory;
