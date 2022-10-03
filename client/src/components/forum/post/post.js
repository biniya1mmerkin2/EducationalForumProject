import React from "react";
import { Container, Stack, Grid } from "@mui/material";

import RightPart from "./rightPart";
import LeftPart from "./leftPart";

const Post = () => {
  return (
    <Container>
      <Grid container>
        <Grid item lg={9} sm={9}>
          <LeftPart />
        </Grid>
        <Grid item lg={3} sm={3}>
          <RightPart />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Post;
