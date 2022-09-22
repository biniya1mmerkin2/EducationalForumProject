import React, { useState } from "react";
import {
  Container,
  Stack,
  Typography,
  Button,
  Divider,
  TextField,
  Box,
} from "@mui/material";
import Filebase from "react-file-base64";

const PersonDetail = ({ result }) => {
  const [test, setTest] = useState(true);
  const [editUni, setEditUni] = useState(false);
  const [editphone, seteditphoe] = useState(false);
  const [profile, setprofile] = useState(false);
  const handleClick = () => {
    setTest(!test);
  };
  return (
    <Container maxWidth="xl" sx={{ border: 0.5, borderColor: "#ffffff" }}>
      {result.map((item) => (
        <Stack key={item._id}>
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={test ? 45 : 30}
          >
            <Stack>
              <Typography
                color={test ? "white" : "chocolate"}
                variant={test ? "h2" : "h3"}
                fontWeight={test ? "700" : "400"}
                mt="10px"
                mb="10px"
              >
                {test ? "Profile" : "My Account"}
              </Typography>
              {test ? (
                <Typography color="white" mb="10px">
                  join date: {new Date(item.joindate).toDateString()}
                </Typography>
              ) : (
                <Typography color="white" mb="10px">
                  view and edit your personal info below.
                </Typography>
              )}
            </Stack>
            {test ? (
              <Button
                className="active"
                variant="outlined"
                color="warning"
                onClick={handleClick}
              >
                Edit Profile
              </Button>
            ) : (
              <Stack direction="row" spacing={1}>
                <Button
                  className="active"
                  variant="outlined"
                  color="warning"
                  onClick={handleClick}
                >
                  Discard
                </Button>
                <Button variant="contained" color="warning">
                  Update info
                </Button>
              </Stack>
            )}
          </Stack>
          <Divider sx={{ border: 0.5, borderColor: "whitesmoke" }} />
          {test ? (
            <Typography
              color="white"
              variant="h4"
              fontWeight="700"
              mt="20px"
              mb="10px"
            >
              About
            </Typography>
          ) : (
            <>
              {" "}
              <Typography variant="h5" color="white" mt="10px">
                Display info
              </Typography>
              <Typography color="whitesmoke" mt="10px">
                Your profile card is visible to all members of this site
              </Typography>
              <Typography color="whitesmoke" mt="10px">
                Display Name :
              </Typography>
              <TextField className="textfield" value={item.name} disabled />
              <Typography color="whitesmoke" mt="10px">
                Login Email:
              </Typography>
              <TextField className="textfield" value={item.email} disabled />
            </>
          )}
          {test ? (
            <Stack direction="row" spacing={2}>
              <Typography color="white" mb="10px" variant="body2">
                4 likes Recived
              </Typography>
              <Typography color="white" mb="10px" variant="body2">
                4 comments Recived
              </Typography>
              <Typography color="white" mb="10px" variant="body2">
                4 best answer Recived
              </Typography>
            </Stack>
          ) : (
            <Stack>
              <Box margin="30px">
                <Stack margin="10px" direction="row" spacing={1}>
                  <Button
                    variant="outlined"
                    color="warning"
                    onClick={() => setEditUni(!editUni)}
                  >
                    Add University
                  </Button>
                </Stack>
                {editUni && (
                  <Stack margin="10px">
                    <TextField
                      className="textfield"
                      color="warning"
                      placeholder="University"
                    />
                  </Stack>
                )}
                <Stack margin="10px" direction="row" spacing={1}>
                  <Button
                    variant="outlined"
                    color="warning"
                    onClick={() => seteditphoe(!editphone)}
                  >
                    Add Phone
                  </Button>
                </Stack>
                {editphone && (
                  <Stack margin="10px">
                    <TextField
                      className="textfield"
                      color="warning"
                      placeholder="Phone Number"
                    />
                  </Stack>
                )}
                <Stack margin="10px" direction="row" spacing={1}>
                  <Button
                    variant="outlined"
                    color="warning"
                    onClick={() => setprofile(!profile)}
                  >
                    Change Profile
                  </Button>
                  {profile && <Filebase type="file" mutiple={false} />}
                </Stack>
              </Box>
            </Stack>
          )}
        </Stack>
      ))}
    </Container>
  );
};

export default PersonDetail;
