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
import { useDispatch } from "react-redux";
import { updateuserinfoaction } from "../../../action/user";

const PersonDetail = ({ result }) => {
  const dispatch = useDispatch();
  const [test, setTest] = useState(true);
  // const [editUni, setEditUni] = useState(false);
  // const [editphone, seteditphoe] = useState(false);
  // const [profile, setprofile] = useState(false);
  const [data, setdata] = useState({
    university: "",
    phonenumber: "",
    profilePic: "",
  });
  const handleClick = () => {
    setTest(!test);
  };

  const handleUpdate = (id) => {
    console.log(data);
    dispatch(updateuserinfoaction(data, id));
    setdata({ university: "", phonenumber: "", profilePic: "" });
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
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => handleUpdate(item._id)}
                >
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
                  <Button variant="outlined" color="warning">
                    Add University
                  </Button>
                </Stack>
                {!test && (
                  <Stack margin="10px">
                    <TextField
                      className="textfield"
                      color="warning"
                      placeholder="University"
                      value={data.university}
                      onChange={(e) =>
                        setdata({ ...data, university: e.target.value })
                      }
                    />
                  </Stack>
                )}
                <Stack margin="10px" direction="row" spacing={1}>
                  <Button variant="outlined" color="warning">
                    Add Phone
                  </Button>
                </Stack>
                {!test && (
                  <Stack margin="10px">
                    <TextField
                      className="textfield"
                      color="warning"
                      placeholder="Phone Number"
                      value={data.phonenumber}
                      onChange={(e) =>
                        setdata({
                          ...data,
                          phonenumber: e.target.value,
                        })
                      }
                    />
                  </Stack>
                )}
                <Stack margin="10px" direction="row" spacing={1}>
                  <Button variant="outlined" color="warning">
                    Change Profile
                  </Button>
                  {!test && (
                    <Filebase
                      type="file"
                      mutiple={false}
                      onDone={({ base64 }) =>
                        setdata({ ...data, profilePic: base64 })
                      }
                    />
                  )}
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
