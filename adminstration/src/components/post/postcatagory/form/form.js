import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCatagory, updateCatagory } from "../../../../action/post";
import { Paper, Typography, TextField, Button, Stack } from "@mui/material";
import Filebase from "react-file-base64";

const Form = ({ setIdToUpdate, idToUpdate }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) =>
    idToUpdate ? state.posts.find((post) => post._id === idToUpdate) : null
  );

  const [postData, setpostData] = useState({
    title: "",
    description: "",
    selectedFile: "",
  });

  useEffect(() => {
    //  ;
    idToUpdate ? setpostData(data) : console.log("submit part");
  }, [idToUpdate]);

  const clear = () => {
    setpostData({
      title: "",
      description: "",
      selectedFile: "",
    });
  };
  const handleSubmit = () => {
    idToUpdate
      ? dispatch(updateCatagory(idToUpdate, postData))
      : dispatch(createCatagory(postData));

    clear();
  };
  return (
    <Paper sx={{ ml: 5 }} elevation={6}>
      <Stack>
        <Stack alignItems={"center"}>
          <Typography sx={{ m: 1 }} variant="h6">
            {idToUpdate ? " Edit Catagory" : "Create Catagory"}
          </Typography>
        </Stack>
        <TextField
          sx={{ m: 1 }}
          name="title"
          required={true}
          variant="outlined"
          label="title"
          value={postData.title}
          onChange={(e) => setpostData({ ...postData, title: e.target.value })}
        />
        <TextField
          sx={{ m: 1 }}
          name="description"
          required={true}
          variant="outlined"
          label="discription"
          value={postData.description}
          onChange={(e) =>
            setpostData({ ...postData, description: e.target.value })
          }
        />
        <Stack sx={{ m: 1 }}>
          <Filebase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setpostData({ ...postData, selectedFile: base64 })
            }
          />
        </Stack>
        <Button sx={{ m: 1 }} variant="contained" onClick={handleSubmit}>
          {idToUpdate ? "Update" : "Submit"}
        </Button>
      </Stack>
    </Paper>
  );
};

export default Form;
