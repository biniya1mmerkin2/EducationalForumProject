import React, { useState, useEffect } from "react";
import {
  Typography,
  Paper,
  TextField,
  Container,
  Stack,
  Button,
} from "@mui/material";
import Filebase from "react-file-base64";
import { connect, useDispatch, useSelector } from "react-redux";
import { testRedux, testRedux1 } from "../../action/postcatagory";
import { Connect } from "react-redux";

const PostCatagory = (props) => {
  const [catagories, setCatagories] = useState({
    title: "",
    description: "",
    selectedFile: "",
  });
  const data = useSelector((state) => state.test);
  const dispatch = useDispatch();
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(testRedux(catagories));
    // const data = props.testRedux();

    // props.testRedux1();

    // console.log(catagories);

    setCatagories({
      title: "",
      description: "",
      selectedFile: "",
    });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Container maxWidth={"md"}>
      <Paper elevation={6} sx={{ height: 400 }}>
        <Stack justifyContent={"center"} alignItems="center" spacing={1}>
          <Stack>
            <Typography variant="h6"> Post Catagory Page</Typography>
          </Stack>
          <Stack spacing={1}>
            <TextField
              name="title"
              required={true}
              variant="outlined"
              label="title"
              value={catagories.title}
              onChange={(e) =>
                setCatagories({ ...catagories, title: e.target.value })
              }
              fullWidth
            />
            <TextField
              name="description"
              required={true}
              variant="outlined"
              label="discription"
              value={catagories.description}
              onChange={(e) =>
                setCatagories({ ...catagories, description: e.target.value })
              }
              fullWidth
            />
            <Filebase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setCatagories({ ...catagories, selectedFile: base64 })
              }
            />
            {/* <Button fullWidth variant="contained" onClick={props.testRedux}>
              Test
            </Button> */}
            <Button fullWidth variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
          <Stack></Stack>
          <Stack></Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     test: state.test,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     testRedux: () => dispatch(testRedux()),
//     testRedux1: () => dispatch(testRedux1()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(PostCatagory);
export default PostCatagory;
