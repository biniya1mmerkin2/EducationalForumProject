import React, { useState } from "react";
import { Box, Stack, Avatar, Typography, IconButton } from "@mui/material";
import {
  MoreVertOutlined,
  FavoriteBorderOutlined,
  Favorite,
} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { likecome, removelikecome } from "../../../action/post";

const EachComment = ({ comment, likes, userid, id, commentid }) => {
  const dispatch = useDispatch();
  const users = JSON.parse(localStorage.getItem("userdata"));
  const isthere = likes.filter((item) => item === users?.result?._id);
  const members = useSelector((state) => state.user.allUser);
  const [commentreaction, setcommentreaction] = useState(
    isthere.length > 0 ? true : false
  );

  const handleClick = () => {
    if (commentreaction) {
      likes.pop();
      setcommentreaction(false);
      dispatch(removelikecome(id, { userid: users?.result?._id, commentid }));
    }
  };

  const handleClick2 = () => {
    likes.push(userid);
    setcommentreaction(true);
    dispatch(likecome(id, { userid: users?.result?._id, commentid }));
  };
  console.log(commentid);
  return (
    <>
      <Box mt="40px">
        <>
          <Stack direction="row" spacing={2}>
            {members.map((mem) =>
              mem._id === userid ? (
                <Stack direction="row" spacing={2} key={mem._id}>
                  {!mem.profilePic ? (
                    <Avatar sx={{ color: "black" }}>
                      {mem.name.charAt(0)}
                    </Avatar>
                  ) : (
                    <Avatar sx={{ background: "#f57c00" }}>
                      <img
                        src={mem.profilePic}
                        alt="pic"
                        height={50}
                        width={80}
                      />
                    </Avatar>
                  )}

                  <Stack spacing={1}>
                    <Stack direction="row" justifyContent="space-around">
                      <Stack>
                        <Typography color="chocolate">{mem.email}</Typography>
                        <Typography color="white">{comment}</Typography>
                      </Stack>
                      <IconButton>
                        <MoreVertOutlined sx={{ color: "white" }} />
                      </IconButton>
                    </Stack>

                    <Stack direction="row" spacing={4}>
                      <Stack direction="row">
                        {users?.result && (
                          <Stack direction="row" mb={2}>
                            {commentreaction ? (
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
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              ) : (
                ""
              )
            )}
          </Stack>
        </>
      </Box>
    </>
  );
};

export default EachComment;
