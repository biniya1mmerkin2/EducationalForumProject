import React, { useState, useEffect } from "react";
import { Grid, Container } from "@mui/material";
import Form from "./form/form";
import DataTable from "./datatable/datatable";
import { getCatagory } from "../../../action/post";
import { useDispatch, useSelector } from "react-redux";

const PostCatagory = () => {
  const [idToUpdate, setIdToUpdate] = useState();
  const check = useSelector((state) => state.check);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatagory());
  }, [check]);

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
