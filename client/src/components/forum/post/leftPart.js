import React, { useState } from "react";
import {
  Avatar,
  Divider,
  IconButton,
  Stack,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import Image from "../../../images/javascript_logo.png";

const LeftPart = () => {
  const [check, setcheck] = useState(false);
  const [checktyping, setChecktyping] = useState(false);

  const handleCancel = () => {
    setcheck(false);
    setChecktyping(false);
  };

  return (
    <Stack>
      <Stack direction="row" spacing={1} mt="30px">
        <Avatar sx={{ background: "#f57c00" }}>E</Avatar>
        <Stack>
          <Typography color="white" className="active">
            biniyammerkin30@gmail.com
          </Typography>
          <Typography color="white">4h</Typography>
        </Stack>
      </Stack>
      <Typography variant="h5" color="white" mt="20px" mb="10px">
        Fetch Data
      </Typography>
      <Typography color="chocolate" className="active" mb="5px">
        in Programming
      </Typography>
      <Typography color="white" mb="10px">
        Hello guys, how can i fetch data from array in JavaScript?
      </Typography>
      <Stack justifyContent="center" alignItems="center" mb={2}>
        <img src={Image} alt="postimage" width={400} height={400} />
      </Stack>
      <Stack direction="row" mb={2}>
        <IconButton>
          <FavoriteBorderOutlined color="error" />
        </IconButton>
        <Typography color="white" mt={1}>
          5
        </Typography>
      </Stack>
      <Divider sx={{ border: 0.5, color: "#ffffff" }} />
      <Typography color="white" fontWeight="bold" mb={1}>
        Comments
      </Typography>
      <Box sx={{ backgroundColor: "#ffffff" }}>
        <TextField
          label="leave your comment here"
          fullWidth
          onClick={() => setcheck(true)}
          // onKeyDown={() => setChecktyping(true)}
          onInput={() => setChecktyping(true)}
        />
      </Box>
      {check ? (
        <Stack direction="row" justifyContent="flex-end" spacing={2} mt={2}>
          <Button variant="outlined" color="warning" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color={checktyping ? "warning" : "inherit"}
          >
            Publish
          </Button>
        </Stack>
      ) : (
        ""
      )}
    </Stack>
  );
};

export default LeftPart;
