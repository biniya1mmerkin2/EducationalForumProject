import React from "react";
import { Stack, Typography, Container } from "@mui/material";

import PersonData from "./personData";
import PersonalData2 from "./personalData2";
import PersonDetail from "./personDetail";

const PersonalData = () => {
  const { result } = JSON.parse(localStorage.getItem("userdata"));

  console.log(result);
  return (
    <Container sx={{ mt: 3 }}>
      <Stack direction="row" spacing={2}>
        <Stack>
          <PersonData result={result} />
          <PersonalData2 result={result} />
        </Stack>
        <Stack>
          <PersonDetail result={result} />
        </Stack>
      </Stack>
    </Container>
  );
};

export default PersonalData;
