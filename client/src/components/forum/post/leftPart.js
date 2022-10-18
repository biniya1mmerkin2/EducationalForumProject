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
  Modal,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { FavoriteBorderOutlined, Favorite } from "@mui/icons-material";

import { postLike, postdislike } from "../../../action/post";
const style = {
  position: "absolute",
  top: "35%",
  left: "25%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  background: "#080808",
  p: 4,
};

const LeftPart = ({
  id,
  title,
  description,
  postimage,
  likes,
  comments,
  userid,
  categoryid,
  dateofpost,
}) => {
  const [check, setcheck] = useState(false);
  const [checktyping, setChecktyping] = useState(false);
  const [open, setopen] = useState(false);

  const dispatch = useDispatch();

  const handleopen = () => setopen(true);

  const users = JSON.parse(localStorage.getItem("userdata"));
  const alluser = useSelector((state) =>
    state.user.allUser.filter((item) => item._id === userid)
  );
  const posts = useSelector((state) =>
    state.reducer.posts.filter((item) => item._id === categoryid)
  );

  const email = alluser.map((item) => item.email);
  const profilePic = alluser.map((item) => item.profilePic);
  const category = posts.map((item) => item.title);
  const isthere = likes.filter((item) => item === users?.result?._id);

  const [reaction, setreaction] = useState(isthere.length > 0 ? true : false);

  const handleCancel = () => {
    setcheck(false);
    setChecktyping(false);
  };

  const handleClick = () => {
    if (reaction) {
      likes.pop();
      setreaction(false);
      dispatch(postdislike(id, { userid: users?.result?._id }));
    }
  };

  const handleClick2 = () => {
    likes.push(userid);
    setreaction(true);
    dispatch(postLike(id, { userid: users?.result?._id }));
  };

  const handleClose = () => {
    setopen(false);
  };

  // console.log(id);
  return (
    <Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction="row" spacing={2}>
            <img
              src={profilePic}
              alt="profil"
              width={70}
              height={70}
              className="hov"
            />
            {alluser.map((item) => (
              <Stack key={item._id}>
                <>
                  <Typography color="chocolate" className="active">
                    {item.email}
                  </Typography>
                  <Typography color="white" className="active">
                    {item.name}
                  </Typography>
                  <Stack direction="row" spacing={2} mt={2}>
                    <Stack>
                      <Typography color="white" className="active">
                        followers
                      </Typography>
                      <Button variant="outlined" color="warning" size="small">
                        {item.followers.length}
                      </Button>
                    </Stack>
                    <Stack>
                      <Typography color="white" className="active">
                        following
                      </Typography>
                      <Button variant="outlined" color="warning" size="small">
                        {item.following.length}
                      </Button>
                    </Stack>
                  </Stack>
                </>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Modal>
      <Stack direction="row" spacing={1} mt="30px">
        <Button onMouseOver={() => setopen(true)}>
          <Avatar sx={{ background: "#f57c00" }}>
            <img src={profilePic} alt="pic" height={50} width={80} />
          </Avatar>
        </Button>
        <Stack>
          <Typography color="chocolate" className="active">
            {email}
          </Typography>
          <Typography color="white">
            {new Date(dateofpost).toDateString()}
          </Typography>
        </Stack>
      </Stack>
      <Typography variant="h5" color="white" mt="20px" mb="10px">
        {title}
      </Typography>
      <Typography color="chocolate" className="active" mb="5px">
        {category}
      </Typography>
      <Typography color="white" mb="10px">
        {description}
      </Typography>
      <Stack justifyContent="center" alignItems="center" mb={2}>
        <img src={postimage} alt="postimage" width={400} height={400} />
      </Stack>
      {users?.result && (
        <Stack direction="row" mb={2}>
          {reaction ? (
            <IconButton onClick={handleClick}>
              <Favorite color="error" />
            </IconButton>
          ) : (
            <IconButton onClick={handleClick2}>
              <FavoriteBorderOutlined color="error" />
            </IconButton>
          )}
          <Typography color="white" mt={1}>
            {likes.length}
          </Typography>
        </Stack>
      )}
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
      <Box mt="40px" sx={{ border: 0.5, borderRadius: 5 }}>
        <Stack direction="row" spacing={2}>
          <Avatar>B</Avatar>
          <Stack spacing={1}>
            <Typography color="chocolate">biniyammerkin30@gmail.com</Typography>
            <Typography color="white">it is good idea i love it</Typography>

            <Stack direction="row">
              <IconButton>
                <Favorite color="error" />
              </IconButton>
              <Typography color="white" mt="10px">
                9
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default LeftPart;
