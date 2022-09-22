import React, { useEffect } from "react";
import {
  Stack,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
  Grid,
  Container,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../../action/user";
const Members = () => {
  const dispatch = useDispatch();
  const { allUser } = useSelector((state) => state.user);
  const { result } = JSON.parse(localStorage.getItem("userdata"));
  //   console.log(result);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <Container>
      <Grid container>
        {allUser.map((item) => (
          <Grid item lg={3} ml={1} mb={1}>
            <Card
              elevation={6}
              sx={{ border: 0.5, borderColor: "#ffffff" }}
              key={item._id}
            >
              <CardContent style={{ background: "#080808" }}>
                <Stack direction="row">
                  <Avatar
                    sx={{ background: "#fff", mt: "15px", color: "#000" }}
                  >
                    {item.name.charAt(0).toUpperCase()}
                  </Avatar>
                  <Stack>
                    <Typography
                      className="active"
                      color="chocolate"
                      mt="10px"
                      ml="10px"
                    >
                      {item.name}
                    </Typography>
                    <Typography className="active" color="white" ml="10px">
                      {item.email}
                    </Typography>
                  </Stack>
                </Stack>
                <Typography
                  color="white"
                  variant="h6"
                  marginLeft="30px"
                  marginTop="10px"
                >
                  {item.university}
                </Typography>
                <Typography color="white" marginLeft="100px">
                  {item.role}
                </Typography>
                <Stack direction="row" mt="20px" spacing={2}>
                  <Stack>
                    <Typography color="white" className="active">
                      Followers
                    </Typography>
                    <Button color="warning">{item.followers.length}</Button>
                  </Stack>
                  <Stack alignItems="center" justifyContent="center">
                    <Typography color="white" className="active">
                      Following
                    </Typography>
                    <Button color="warning">{item.following.length}</Button>
                  </Stack>
                </Stack>

                {item._id !== result._id ? (
                  <Button variant="contained" color="warning">
                    Follow
                  </Button>
                ) : (
                  <Button variant="outlined" color="warning">
                    View Profile
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Members;
