import React from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import Image from "../../../images/defaultprofile.jpg";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MembersDetail = () => {
  const { id } = useParams();
  const profile = useSelector((state) =>
    state.members.members.filter((item) => item._id === id)
  );
  console.log(profile);
  return (
    <Container>
      <Stack
        direction="row"
        spacing={40}
        justifyContent="center"
        alignItems="center"
      >
        {profile.map((item) => (
          <>
            <Stack spacing="5px" mt="10px">
              <Typography>Name : {item.name}</Typography>
              <Typography>Email: {item.email}</Typography>
              <Typography>Role: {item.role}</Typography>
              <Typography>Followers: {item.followers.length}</Typography>
              <Typography>Following: {item.following.length}</Typography>
              <Typography>University: {item.university}</Typography>
              <Typography>
                Joined Date : {new Date(item.joindate).toDateString()}
              </Typography>
            </Stack>
            <Stack>
              <img
                src={item.profilePic === null ? { Image } : item.profilePic}
                alt="defaultprofile"
                width={100}
                height={100}
              />
              <Stack direction="row" spacing={1} mt="10px">
                <Stack spacing={1}>
                  <Button variant="contained" size="small" color="success">
                    edit
                  </Button>
                  <Button variant="contained" size="small" color="secondary">
                    Activate
                  </Button>
                </Stack>
                <Stack spacing={1}>
                  <Button variant="contained" size="small" color="error">
                    Delete
                  </Button>
                  <Button variant="contained" size="small" color="warning">
                    DeActivate
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </>
        ))}
      </Stack>
    </Container>
  );
};

export default MembersDetail;
