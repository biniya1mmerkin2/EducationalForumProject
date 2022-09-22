import React, { useEffect } from "react";
import { Stack, Container, Grid } from "@mui/material";

import PersonData from "./personData";
import PersonalData2 from "./personalData2";
import PersonDetail from "./personDetail";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../../action/user";

const PersonalData = () => {
  const dispatch = useDispatch();
  const { result } = JSON.parse(localStorage.getItem("userdata"));
  const users = useSelector((state) =>
    state.user.allUser.filter((item) => item._id === result._id)
  );
  console.log(users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <Container sx={{ mt: 3, height: "100%" }}>
      <Stack direction="row" spacing={2}>
        <Stack>
          <PersonData result={users} />
          <PersonalData2 result={result} />
        </Stack>

        <Stack>
          <PersonDetail result={users} />
        </Stack>
      </Stack>
    </Container>
  );
};

export default PersonalData;
